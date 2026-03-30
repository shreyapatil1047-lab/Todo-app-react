import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const savedData = localStorage.getItem("myTodos");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [currentTodo, setCurrentTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  // 1. New Item add karne ka function
  const handleNewItem = (itemName, itemDueDate, itemAmount) => {
    if (isEditing) {
      // Agar hum Edit kar rahe hain (Update logic)
      const updatedItems = todoItems.map(
        (item) =>
          item.name === currentTodo.name // Purane item ko find karein (naam unique hona chahiye)
            ? { name: itemName, dueDate: itemDueDate, amount: itemAmount } // Naye data se replace karein
            : item, // Baaki items same rahenge
      );
      setTodoItems(updatedItems);
      setIsEditing(false); // Edit mode off karein
      setCurrentTodo(null); // Current todo khali karein
    } else {
      // Agar hum Naya item add kar rahe hain (Add logic)
      const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: itemDueDate, amount: itemAmount },
      ];
      setTodoItems(newTodoItems);
    }
  };

  // 2. Delete karne ka function
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  // 3. Edit karne ka function
  const handleEditItem = (itemName) => {
    const itemToEdit = todoItems.find((item) => item.name === itemName);
    setCurrentTodo(itemToEdit);
    setIsEditing(true);
  };
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todoItems));
  }, [todoItems]); // Bracket aur semicolon check karein
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo
        onNewItem={handleNewItem}
        isEditing={isEditing}
        currentTodo={currentTodo}
      />

      {todoItems.length === 0 && <WelcomeMessage />}

      {/* TodoItems ko list pass kar rahe hain */}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
        onEditClick={handleEditItem} // Edit handler pass kiya
      />
    </center>
  );
}

export default App;

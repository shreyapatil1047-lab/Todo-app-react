import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useEffect } from "react"; // 👈 1. Yahan useEffect add kiya

function App() {
  // 👈 2. useState ko thoda change kiya taaki page khulte hi purana data load ho
  const [todoItems, setTodoItems] = useState(() => {
    const savedData = localStorage.getItem("myTodos");
    if (savedData) {
      return JSON.parse(savedData); // Agar purana data hai toh use list mein daalo
    } else {
      return []; // Nahi toh khali list dikhao
    }
  });

  // 👈 3. Yeh magic code hai! Jab bhi todoItems mein kuch add/delete hoga, yeh use turant browser mein save kar dega
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
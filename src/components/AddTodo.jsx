import { useState, useEffect } from "react";

function AddTodo({ onNewItem, isEditing, currentTodo }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amount, setAmount] = useState(""); // Naya state for amount

  useEffect(() => {
    if (isEditing && currentTodo) {
      // Ye functions ko call karna zaroori hai () ke saath
      setTodoName(currentTodo.name);
      setDueDate(currentTodo.dueDate);
      setAmount(currentTodo.amount);
    } else {
      // Edit mode khatam hone par khali karein
      setTodoName("");
      setDueDate("");
      setAmount("");
    }
  }, [isEditing, currentTodo]);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate, amount);
    setDueDate("");
    setTodoName("");
    setAmount("");
  };

  return (
    <div className="row kg-row">
      <div className="col-12 col-md-4 mb-2">
        {" "}
        {/* Mobile pe full width, desktop pe 4 */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter Here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-12 col-md-3 mb-2">
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-12 col-md-3 mb-2">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="col-12 col-md-2">
        <button
          className="btn btn-success w-100"
          onClick={handleAddButtonClicked}
        >
          {isEditing ? "Save" : "Add"}
        </button>
      </div>
    </div>
  );
}
export default AddTodo;

function TodoItem({ todoName, todoDate, todoAmount, onDeleteClick, onEditClick }) {
  return (
    <div className="container">
      <div className="row kg-row align-items-center mb-2 border-bottom pb-2">
        <div className="col-4 text-start fw-bold">
          {todoName}
        </div>
        <div className="col-3 text-start">
          {todoDate}
        </div>

        {/* --- YEH LINE ADD KAREIN --- */}
        <div className="col-2 text-primary fw-bold">
          ₹{todoAmount}
        </div>
        {/* ------------------------- */}

        <div className="col-3">
          <div className="d-flex gap-2 justify-content-end">
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => onEditClick(todoName)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
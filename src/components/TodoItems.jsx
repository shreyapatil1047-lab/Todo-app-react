import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick, onEditClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          todoAmount={item.amount}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick} // Edit handler pass kiya
        />
      ))}
    </div>
  );
};
export default TodoItems;

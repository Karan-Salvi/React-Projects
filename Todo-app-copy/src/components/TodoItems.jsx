import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

let TodoItems = () => {
  const TodoItemContext = useContext(TodoItemsContext);
  let todoitems = TodoItemContext.item;
  let onDeleteClicked = TodoItemContext.deleteItem;
  return (
    <>
      {todoitems.map((todoitem) => (
        <TodoItem todoitems={todoitem} onDeleteClicked={onDeleteClicked} key={todoitem.name} />
      ))}
    </>
  );
};

export default TodoItems;

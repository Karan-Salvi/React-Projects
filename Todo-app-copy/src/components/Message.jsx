import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

let Message = () => {
  const ItemContext = useContext(TodoItemsContext);
  let todoitems = ItemContext.item;

  return (
    <>{todoitems.length === 0 && <h1 className="p-5">Enjoy your day....</h1>}</>
  );
};

export default Message;

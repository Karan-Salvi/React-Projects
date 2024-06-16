import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

let AddTodo = () => {
  const ItemContext = useContext(TodoItemsContext);
  let onAddButton = ItemContext.addNewItem;

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  return (
    <>
      <div className="container text-center mt-4">
        <form
          className="row"
          onSubmit={(event) => {
            event.preventDefault();
            const todoName = todoNameElement.current.value;
            const todoDate = todoDateElement.current.value;
            onAddButton(todoName, todoDate);
          }}
        >
          <div className="col-5">
            <input
              type="text"
              placeholder="Enter todo here.."
              ref={todoNameElement}
              className="w-100 h-100"
            />
          </div>
          <div className="col-5">
            <input type="date" className="w-100 h-100" ref={todoDateElement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success w-100 h-100">
              <BiMessageAdd />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;

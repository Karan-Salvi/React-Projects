import TodoItem from "./TodoItem";

let TodoItems = ({ todoitems, onDeleteClicked }) => {
  return (
    <>
      {todoitems.map((todoitem) => (
        <TodoItem todoitems={todoitem} onDeleteClicked={onDeleteClicked} key={todoitem.name} />
      ))}
    </>
  );
};

export default TodoItems;

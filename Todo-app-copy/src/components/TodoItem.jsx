import { MdDelete } from "react-icons/md";
let TodoItem = ({ todoitems, onDeleteClicked }) => {
  let { name, date } = todoitems;
  return (
    <>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col-5">
            <p>{name}</p>
          </div>
          <div className="col-5">
            <p>{date}</p>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger w-100 h-100"
              onClick={() => onDeleteClicked(name)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;

import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  let inputElement = useRef();

  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecreament = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    let value = inputElement.current.value;
    dispatch({
      type: "ADDITION",
      payload: {
        number: value,
      },
    });
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="kzf0m9h"
          onClick={handleIncreament}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          fdprocessedid="t4jalf"
          onClick={handleDecreament}
        >
          -1
        </button>

        <input
          type="text"
          placeholder="Enter number here.."
          className=""
          ref={inputElement}
        />

        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          fdprocessedid="t4jalf"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
    </>
  );
};

export default Controls;

import { useState } from "react";
import "./App.css";

function App() {
  const [calVal, setCalVal] = useState("");

  let onButtonClicked = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      let answer = eval(calVal);
      setCalVal(answer);
    } else {
      let newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  };

  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <center>
        <div className="container">
          <input type="text" readOnly className="displayBox" value={calVal} />
          <div className="button_container">
            {buttonName.map((name) => (
              <button
                className="myButton"
                onClick={() => onButtonClicked(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </center>
    </>
  );
}

export default App;

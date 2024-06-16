import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextToShow] = useState("Food entered by the user...");

  let [foodItems, setFoodItems] = useState(["Milk", "Salad", "Vegetable"]);

  let handleOnChange = (event) => {
    setTextToShow(event.target.value);
  };

  let keyDown = (event) => {
    //console.log(event.target.value);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newlist = [...foodItems, newFoodItem];
      setFoodItems(newlist);
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ErrorMessage foodItems={foodItems} />
        <FoodInput handleOnChange={handleOnChange} keyDown={keyDown} />
        <p className="p-2">{textToShow}</p>
        <FoodItems foodItems={foodItems} />
      </Container>
    </>
  );
}

export default App;

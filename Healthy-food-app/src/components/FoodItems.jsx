import { useState } from "react";
import FoodItem from "./FoodItem";
const FoodItems = ({ foodItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  let boughtMethod = (item) => {
    let newActiveItems = [...activeItems, item];
    setActiveItems(newActiveItems);
  };

  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <FoodItem
            item={item}
            boughtMethod={() => {
              boughtMethod(item);
            }}
            bought={activeItems.includes(item)}
            key={item}
          />
        ))}
      </ul>
    </>
  );
};
export default FoodItems;

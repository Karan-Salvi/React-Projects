import styles from "./FoodInput.module.css";
let FoodInput = ({ handleOnChange, keyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter food items here..."
        className={`${styles.myInput}`}
        onChange={handleOnChange}
        onKeyDown={keyDown}
      />
    </>
  );
};

export default FoodInput;

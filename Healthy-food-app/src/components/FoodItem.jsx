import styles from "../FoodItem.module.css";
let FoodItem = ({ item, boughtMethod, bought }) => {
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        {item}{" "}
        <span>
          <button
            className={`${styles["K-button"]} btn ${
              bought ? "btn-danger" : "btn-primary"
            }`}
            onClick={boughtMethod}
          >
            Buy
          </button>
        </span>{" "}
      </li>
    </>
  );
};
export default FoodItem;

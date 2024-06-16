import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoBagAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const HomeItem = ({ item }) => {
  const bagitems = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {bagitems.includes(item.id) === true ? (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleRemoveBag}
          >
            <MdDelete /> Remove from Bag
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            <IoBagAddOutline /> Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;

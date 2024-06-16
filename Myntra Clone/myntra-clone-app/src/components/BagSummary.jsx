import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => bagItems.includes(item.id));
  const CONVINIENCE_FEES = 99;
  let totalMRP = 0;
  let totalDiscount = 0;

  let currentPrice = 0;

  finalItems.forEach((element) => {
    totalMRP = totalMRP + element.original_price;
    currentPrice = currentPrice + element.current_price;
  });

  totalDiscount = totalMRP - currentPrice;

  let finalPayment = totalMRP - totalDiscount + CONVINIENCE_FEES;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({finalItems.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;

import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";
import Message from "./Message";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => bagItems.includes(item.id));

  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.length === 0 ? (
            <Message />
          ) : (
            <>
              <div className="bag-items-container">
                {finalItems.map((item) => (
                  <BagItem item={item} />
                ))}
              </div>
              <div className="bag-summary">
                <BagSummary />
              </div>{" "}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Bag;

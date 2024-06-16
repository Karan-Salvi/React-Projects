import { useEffect } from "react";
import { itemsActions } from "../store/itemSlice";
import { useDispatch } from "react-redux";

const Fetchitems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      console.log("Cleaning up use effect");
      controller.abort();
    };
  }, []);

  return <></>;
};
export default Fetchitems;

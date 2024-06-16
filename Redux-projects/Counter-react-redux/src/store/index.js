import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + Number(action.payload.number) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { privacy: !store.privacy };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;

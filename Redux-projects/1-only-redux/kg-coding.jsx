const redux = require("redux");

const INITIAL_STORE = {
  counter:0,
}

const reducer = (store = INITIAL_STORE, action) => {
  let newStore = store;
  if(action.type === "INCREAMENT")
    {
      newStore = {counter:store.counter + 1};
    }else if(action.type === "DECREAMENT")
      {
        newStore = {counter:store.counter - 1};
      }
    return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};


store.subscribe(subscriber);

store.dispatch({type:"INCREAMENT"});
store.dispatch({type:"DECREAMENT"});
store.dispatch({type:"INCREAMENT"});
store.dispatch({type:"INCREAMENT"});
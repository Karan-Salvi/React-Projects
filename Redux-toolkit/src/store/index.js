import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increament: (state) => {
      state.counterVal++;
    },
    decreament: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.number);
    },
  },
});

const privacySlice = createSlice({
  name:'privacy',
  initialState:{}
})

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export  const counterActions = counterSlice.actions;
export default counterStore;



// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     newStore = { counter: store.counter - 1 };
//   } else if (action.type === "ADDITION") {
//     newStore = { counter: store.counter + Number(action.payload.number) };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     return { privacy: !store.privacy };
//   }
//   return newStore;
// };
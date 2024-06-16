import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
  name:"fetchStatus",
  initialState:{
    fetchDone:false,
    currentlyFetching:false,
  },
  reducer:{
    markFetchDone:(state) => {
      state.fetchDone = true;
    },
    markFetchingStarted:(state) =>{
      state.currentlyFetching = true;
    },
    markFetchingFinished:(state) =>{
      state.currentlyFetching = false;
    },
  }
})

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;























/*import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState:{
    fetchDone:false, // false = "Pending" and true = "Done"
    currentFetching:false,
  },
  reducers: {
   markFetchDone : (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted : (state) => {
      return state.currentFetching = true;
    },
    markFetchingFinished : (state) => {
      return state.currentFetching = false;
    },
  },
})

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;*/














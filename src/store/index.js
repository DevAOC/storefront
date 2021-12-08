import { createStore, combineReducers } from "redux";

import catagoryReducer from "./catagories.js";

const reducers = combineReducers({ catagories: catagoryReducer });

const store = () => {
  return createStore(reducers);
};

export default store;

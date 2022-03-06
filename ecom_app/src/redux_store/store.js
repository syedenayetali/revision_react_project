import { combineReducers, createStore } from "redux";
import apiDataReducer from "./reducers/apiDataReducer";
import cart from "./reducers/cart";

const reducer = combineReducers({ apiDataReducer, cart });
const store = createStore(reducer);

export default store;

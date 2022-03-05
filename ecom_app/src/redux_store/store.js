import redux from "redux";
import { createStore } from "redux";
import apiDataReducer from "./reducers/apiDataReducer";

const store = createStore(apiDataReducer);

export default store;

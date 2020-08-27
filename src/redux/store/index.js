import { createStore } from "redux";
import reducers from "../reducers";
import { fetchData } from "../actions/index";

const store = createStore(reducers);
store.dispatch(fetchData());

export default store;

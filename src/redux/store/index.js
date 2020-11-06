import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from "../reducers";
import { loadState, setState } from "./localStorage";

const logger = createLogger();
const loadLocalStorage = loadState();
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, loadLocalStorage, middleware);
store.subscribe(() => {
  setState(store.getState());
});

export default store;

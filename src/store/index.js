import { createStore } from "redux";
import reducers from "../reducers";
import { fetchData,fetchByID } from "../actions";



const store = createStore(reducers)

// trigger si function di dalam action
store.dispatch(fetchData()) 
store.dispatch(fetchByID()) 
console.log(store.getState().getAll)

export default store


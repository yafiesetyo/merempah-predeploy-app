import {combineReducers} from "redux";
import getAllData from "./getAllData";
import getDataById from "./getDataById";

export default combineReducers({
    getAll : getAllData,
    getById : getDataById
})
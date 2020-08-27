import { combineReducers } from "redux";
import getAllData from "./getAllData";
import getDataById from "./getDataById";
import componentOps from "./componentOps";

export default combineReducers({
  getAll: getAllData,
  getById: getDataById,
  componentOps: componentOps,
});

import { combineReducers } from "redux";
import AuthReducer from "./user/authReducer";
import RegisterReducer from "./user/registerReducer";
import GetUserReducer from "./user/getUserReducer";
import GetAllStoreReducer from "./stores/getAllStoreReducer";

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
  getUser: GetUserReducer,
  getAllStore: GetAllStoreReducer,
});

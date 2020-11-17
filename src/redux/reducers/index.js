import { combineReducers } from "redux";
import AuthReducer from "./user/authReducer";
import RegisterReducer from "./user/registerReducer";
import GetUserReducer from "./user/getUserReducer";

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
  getUser: GetUserReducer,
});

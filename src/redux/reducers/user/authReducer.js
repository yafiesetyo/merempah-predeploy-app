import UserActionTypes from "../../actions/constants/UserActionTypes";

const initState = {
  isLogin: false,
  message: "",
  isLoading: false,
  data: [],
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.PROCESS_LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionTypes.LOGIN_DATA:
      console.log("reducers says " + action.response_data);
      if (action.response_data) {
        return {
          ...state,
          isLoading: false,
          data: [...action.response_data],
          message: "login success !",
          isLogin: true,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          message: action.response_data.message,
        };
      }
    case UserActionTypes.FLUSH_LOGIN_DATA:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        data: [],
        message: "",
      };
    case UserActionTypes.ERROR_LOGIN:
      return {
        ...state,
        isLoading: false,
        message: action.response_data.message,
      };
    case UserActionTypes.ERROR_LOGOUT:
      return {
        ...state,
        isLoading: false,
        message: action.response_data.message,
      };
    default:
      return state;
  }
};

export default authReducer;

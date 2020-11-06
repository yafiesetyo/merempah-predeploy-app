import UserActionTypes from "../../actions/constants/UserActionTypes";

const initState = {
  message: "",
  isLoading: false,
  data: [],
};

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.PROCESS_REGISTER_START:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionTypes.REGISTER_DATA:
      return {
        ...state,
        isLoading: false,
        data: [action.response_data.data],
      };
    case UserActionTypes.ERROR_REGISTER:
      return {
        ...state,
        isLoading: false,
        message: action.response_data.message,
      };
    default:
      return state;
  }
};

export default registerReducer;

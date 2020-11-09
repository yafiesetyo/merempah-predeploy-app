import UserActionTypes from "../../actions/constants/UserActionTypes";

const initState = {
  isLoading: false,
  message: "",
  data: [],
};

const getUserReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.GET_ONE_DATA:
      return {
        ...state,
        isLoading: false,
        data: [action.response_data],
      };

    case UserActionTypes.ERROR_GET_ONE:
      return {
        ...state,
        message: "error",
      };
    default:
      return state;
  }
};

export default getUserReducer;

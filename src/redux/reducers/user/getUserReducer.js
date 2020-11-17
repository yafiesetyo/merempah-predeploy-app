import UserActionTypes from "../../actions/constants/UserActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  data: [],
};

const getUserReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.PROCESS_GET_ONE_START:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionTypes.GET_ONE_DATA:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: [action.response_data],
      };

    case UserActionTypes.ERROR_GET_ONE:
      return {
        ...state,
        isError: false,
        message: "error",
      };
    default:
      return state;
  }
};

export default getUserReducer;

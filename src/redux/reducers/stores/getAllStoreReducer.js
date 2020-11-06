import StoreActionTypes from "../../actions/constants/StoreActionTypes";

const initState = {
  isLoading: false,
  data: [],
  message: "",
};

const getAllStoreReducer = (state = initState, action) => {
  switch (action.type) {
    case StoreActionTypes.PROCESS_GET_ALL_START:
      return {
        ...state,
        isLoading: true,
      };
    case StoreActionTypes.GET_ALL_DATA:
      return {
        ...state,
        isLoading: false,
        data: [...action.response_data.data],
      };
    case StoreActionTypes.ERROR_GET_ALL:
      return {
        ...state,
        isLoading: false,
        message: JSON.stringify(action.response_data.message),
      };
    default:
      return state;
  }
};

export default getAllStoreReducer;

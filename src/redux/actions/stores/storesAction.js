import axios from "axios";
import StoreActionTypes from "../constants/StoreActionTypes";

export const GetAllStoresData = () => {
  return (dispatch) => {
    dispatch({
      type: StoreActionTypes.PROCESS_GET_ALL_START,
    });
    axios
      .get(
        "https://merempah-predeploy-api-v2.herokuapp.com/api/v1/public/store/product/all"
      )
      .then((res) => {
        console.log("msh seger nih " + res.data.message);
        dispatch({
          type: StoreActionTypes.GET_ALL_DATA,
          response_data: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: StoreActionTypes.ERROR_GET_ALL,
          response_data: err,
        });
      });
  };
};

import axios from "axios";
import UserActionTypes from "../constants/UserActionTypes";

// Login Action
export const Auth = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: UserActionTypes.PROCESS_LOGIN_START,
    });
    axios
      .post(
        "https://merempah-predeploy-api-v2.herokuapp.com/api/v1/public/user/login",
        {
          username: username,
          password: password,
        }
      )
      .then((res) => {
        console.log(`login API response => ${res.data[0]}`);
        localStorage.setItem("access-token", res.data[0].access_token);
        dispatch({
          type: UserActionTypes.LOGIN_DATA,
          response_data: res.data[0].id,
        });
        dispatch({
          type: UserActionTypes.PROCESS_GET_ONE_START,
        });
        axios
          .post(
            `https://merempah-predeploy-api-v2.herokuapp.com/api/v1/private/user/get`,
            null,
            {
              headers: {
                "x-access-token": localStorage.getItem("access-token"),
              },
            }
          )
          .then((res) => {
            dispatch({
              type: UserActionTypes.GET_ONE_DATA,
              response_data: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: UserActionTypes.ERROR_GET_ONE,
              response_data: "terjadi kesalahan",
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: UserActionTypes.ERROR_LOGIN,
          response_data: "terjadi kesalahan",
        });
      });
  };
};

// Register Action
export const Register = (registerData) => {
  return (dispatch) => {
    dispatch({
      type: UserActionTypes.PROCESS_REGISTER_START,
    });
    axios
      .post(
        "https://merempah-predeploy-api-v2.herokuapp.com/api/v1/public/user/register",
        {
          email: registerData.email,
          username: registerData.username,
          password: registerData.password,
          full_name: registerData.full_name,
          phone_number: registerData.phone_number,
        }
      )
      .then((res) => {
        console.log("berhasil");
        dispatch({
          type: UserActionTypes.REGISTER_DATA,
          response_data: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UserActionTypes.ERROR_REGISTER,
          response_data: err,
        });
      });
  };
};

export const GetData = (userId, id) => {
  return (dispatch) => {
    dispatch({
      type: UserActionTypes.PROCESS_GET_ONE_START,
    });
    axios
      .post(
        `https://merempah-predeploy-api-v2.herokuapp.com/api/v1/private/user/get`,
        null,
        {
          headers: {
            "x-access-token": localStorage.getItem("access-token"),
          },
        }
      )
      .then((res) => {
        dispatch({
          type: UserActionTypes.GET_ONE_DATA,
          response_data: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UserActionTypes.ERROR_GET_ONE,
          response_data: err,
        });
      });
  };
};

// Logout Action
export const Logout = () => {
  return (dispatch) => {
    dispatch({ type: UserActionTypes.PROCESS_LOGOUT_START });
    try {
      localStorage.removeItem("access-token");
      dispatch({
        type: UserActionTypes.FLUSH_LOGIN_DATA,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.ERROR_LOGOUT,
        response_data: error,
      });
    }
  };
};

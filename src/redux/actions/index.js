import axios from "axios";
import { Auth, Register, Logout } from "../actions/user/userAction";

export const FETCH_ALL_DATA_START = "FETCH_ALL_DATA_START";
export const FETCH_ALL_DATA_FINISH = "FETCH_ALL_DATA_FINISH";
export const FETCH_ALL_DATA_ERROR = "FETCH_ALL_DATA_ERROR";
//
export const FETCH_BY_ID = "FETCH_BY_ID";
export const FETCH_TOP_8 = "FETCH_TOP_8";
//
export const SHOW_LOGIN = "SHOW_LOGIN";
export const SHOW_REGISTER = "SHOW_REGISTER";
//
export const PROCESS_START = "PROCESS_START";
export const PROCESS_END = "PROCESS_END";
export const PROCESS_ERROR = "PROCESS_ERROR";
export const UNAUTHORIZED = "UNAUTHORIZED";
export const AUTH_LOGIN_DATA = "POST_LOGIN_DATA";
export const FLUSH_LOGIN_DATA = "FLUSH_LOGIN_DATA";

export function fetchAllDataStart() {
  return {
    type: FETCH_ALL_DATA_START,
  };
}

export function fetchAllDataError(payload) {
  return {
    type: FETCH_ALL_DATA_ERROR,
    payload: payload,
  };
}

export function fetchAllDataFinish(payload) {
  return {
    type: FETCH_ALL_DATA_FINISH,
    payload: payload,
  };
}

export function showLogin() {
  return {
    type: SHOW_LOGIN,
  };
}

export function showRegister() {
  return {
    type: SHOW_REGISTER,
  };
}

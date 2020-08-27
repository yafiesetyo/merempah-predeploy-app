import { SHOW_LOGIN, SHOW_REGISTER } from "../actions/index";

const initState = {
  showLogin: true,
  showRegister: false,
};

const componentOps = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        ...state,
        showLogin: true,
        showRegister: false,
      };
    case SHOW_REGISTER:
      return {
        ...state,
        showLogin: false,
        showRegister: true,
      };
    default:
      return state;
  }
};

export default componentOps;

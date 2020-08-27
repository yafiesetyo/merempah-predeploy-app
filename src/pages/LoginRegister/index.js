import React from "react";
import { connect } from "react-redux";

import LoginSubPage from "./LoginSubPage";
import RegisterSubPage from "./RegisterSubPage";

const LoginRegisterPage = (props) => {
  console.log(props);
  return (
    <>
      <LoginSubPage
        in={props.showLogin}
        style={{ display: props.showLogin ? "inline" : "none" }}
      />
      <RegisterSubPage
        in={props.showRegister}
        style={{
          display: props.showRegister ? "inline" : "none",
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showLogin: state.componentOps.showLogin,
    showRegister: state.componentOps.showRegister,
  };
};

export default connect(mapStateToProps)(LoginRegisterPage);

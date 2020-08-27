import React from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";

import { showLogin, showRegister } from "../../redux/actions/index";

const defaultStyle = {
  transition: `transform 200ms, opacity 200ms ease`,
  opacity: 1,
};

const transitionStyles = {
  entering: { transform: "scale(0.5)", opacity: 0 },
  entered: { transform: "scale(1.0)", opacity: 1 },
  exiting: {
    opacity: 0,
    marginRight: "-100px",
    transition: "all 1s",
    right: "100%",
  },
  exited: { opacity: 0 },
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginButtonEventHandler: () => dispatch(showLogin()),
    RegisterButtonEventHandler: () => dispatch(showRegister()),
  };
};

const RegisterSubPage = (props) => {
  return (
    <Transition in={props.in} timeout={500} unmountOnExit>
      {(state) => (
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
                color: "red",
              }}
            >
              Sudah Punya Akun ?
            </h1>
            <button
              onClick={props.LoginButtonEventHandler}
              style={{
                ...props.style,
                ...transitionStyles[state],
                ...defaultStyle,
              }}
            >
              Login
            </button>
          </div>
          <div className="col-lg-6 col-md-12">
            <h1>Daftar</h1>
            <div className="form">
              <div></div>
              <label for="name">Nama Lengkap</label>
              <input type="text" id="name" />
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default connect(null, mapDispatchToProps)(RegisterSubPage);

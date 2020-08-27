import React from "react";
import { connect } from "react-redux";
import { Transition } from "react-transition-group";

import { showLogin, showRegister } from "../../redux/actions/index";

const defaultStyle = {
  transition: `transform 200ms, opacity 200ms ease`,
  opacity: 1,
};

const transitionStyles = {
  entering: { transform: "scale(0.5)", opacity: 0 },
  entered: { transform: "scale(2.0)", opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginButtonEventHandler: () => dispatch(showLogin()),
    RegisterButtonEventHandler: () => dispatch(showRegister()),
  };
};

const LoginSubPage = (props) => {
  return (
    <>
      <Transition in={props.in} timeout={500} unmountOnExit>
        {(state) => {
          console.log(state);
          return (
            <>
              <h1
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                  marginTop: "50px",
                }}
              >
                Login Page
              </h1>
              <button
                onClick={props.RegisterButtonEventHandler}
                style={props.style}
              >
                Register
              </button>
            </>
          );
        }}
      </Transition>
    </>
  );
};

export default connect(null, mapDispatchToProps)(LoginSubPage);

import React from "react";
import { connect } from "react-redux";
import { Transition } from "react-transition-group";

import { showLogin, showRegister } from "../../redux/actions/index";

import AccountBg from "../../assets/accountBg.png";

const defaultStyle = {
  transition: `transform 200ms, opacity 200ms ease`,
  opacity: 1,
};

const transitionStyles = {
  entering: { transform: "scale(0.5)", opacity: 0 },
  entered: { transform: "scale(1.0)", opacity: 1 },
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
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        paddingBottom: "10px",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "40px",
                          fontWeight: "bold",
                          color: "#964F38",
                        }}
                      >
                        Masuk
                      </h3>
                      <div className="form-card text-left">
                        <form>
                          <div className="form-group">
                            <label
                              for="email"
                              style={{ display: "block", fontWeight: "bold" }}
                            >
                              Email
                            </label>
                            <input
                              placeholder="Email"
                              type="email"
                              id="email"
                              style={{
                                display: "block",
                                width: "100%",
                                padding: "5px",
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label
                              for=""
                              style={{ display: "block", fontWeight: "bold" }}
                            >
                              Password
                            </label>
                            <input
                              placeholder="Password"
                              type="password"
                              style={{
                                display: "block",
                                width: "100%",
                                padding: "5px",
                              }}
                            />
                          </div>
                          <a
                            className="getting-started-button mt-5"
                            style={{
                              padding: "7px 200px",
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            Masuk
                          </a>
                          <a
                            style={{
                              fontSize: "10px",
                              textAlign: "center",
                              display: "block",
                              marginTop: "10px",
                            }}
                            href=" "
                          >
                            Lupa Kata Sandi ?
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6"
                    style={{
                      backgroundImage: `url(${AccountBg})`,
                      backgroundSize: "100% 150%",
                      backgroundPositionY: "-100px",
                    }}
                  >
                    <div
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        paddingBottom: "10px",
                        height: "800px",
                      }}
                      className="d-flex align-items-center"
                    >
                      <div style={{ color: "white" }}>
                        <h3 style={{ fontWeight: "bolder", fontSize: "40px" }}>
                          Halo, Pengguna Merempah
                        </h3>
                        <div className="d-flex justify-content-center">
                          <div style={{ width: "50%" }}>
                            <h5
                              style={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                              {" "}
                              Silahkan masukkan nama pengguna dan sandimu untuk
                              segera masuk ke platform Merempah
                            </h5>
                            <h5
                              className="mt-5 mb-3"
                              style={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                              Atau jika kamu belum memiliki akun, silahkan klik
                              tombol dibawah ini !
                            </h5>
                            <button
                              onClick={props.RegisterButtonEventHandler}
                              style={{
                                ...props.style,
                                padding: "5px",
                                backgroundColor: "#E3D081",
                                color: "#793f0d",
                                border: "none",
                                fontSize: "18px",
                                width: "100%",
                                display: "block",
                              }}
                              className="getting-started-button"
                            >
                              Daftar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Transition>
    </>
  );
};

export default connect(null, mapDispatchToProps)(LoginSubPage);

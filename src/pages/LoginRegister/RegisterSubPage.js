import React from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";

import { showLogin, showRegister } from "../../redux/actions/index";

import AccountBg from "../../assets/accountBg.png";

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
        <div className="container-fluid">
          <div className="row">
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
                    Selamat Datang !
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div style={{ width: "50%" }}>
                      <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>
                        {" "}
                        Agar kamu dapat menikmati platform Merempah ini,
                        silahkan untuk mendaftarkan akunmu terlebih dahulu!
                      </h5>
                      <h5
                        className="mt-5 mb-3"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        Atau jika kamu sudah memiliki akun, silahkan klik tombol
                        dibawah ini!
                      </h5>
                      <button
                        onClick={props.LoginButtonEventHandler}
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
                        Masuk
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  Daftar
                </h3>
                <div className="form-card text-left">
                  <form>
                    <div className="form-group">
                      <label
                        for="fullname"
                        style={{ display: "block", fontWeight: "bold" }}
                      >
                        Nama Lengkap
                      </label>
                      <input
                        placeholder="Nama Lengkap"
                        type="text"
                        id="fullname"
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "5px",
                        }}
                      />
                    </div>
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
                        for="phoneNum"
                        style={{ display: "block", fontWeight: "bold" }}
                      >
                        Nomor HP
                      </label>
                      <input
                        placeholder="Nomor HP"
                        type="text"
                        id="phoneNum"
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "5px",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="username"
                        style={{ display: "block", fontWeight: "bold" }}
                      >
                        Nama Pengguna
                      </label>
                      <input
                        placeholder="Nama Pengguna"
                        type="text"
                        id="username"
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "5px",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="password"
                        style={{ display: "block", fontWeight: "bold" }}
                      >
                        Kata Sandi
                      </label>
                      <input
                        placeholder="Kata Sandi"
                        type="password"
                        id="password"
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "5px",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="passwordConfirm"
                        style={{ display: "block", fontWeight: "bold" }}
                      >
                        Konfirmasi Kata Sandi
                      </label>
                      <input
                        placeholder="Konfirmasi Kata Sandi"
                        type="password"
                        id="passwordConfirm"
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
                      Daftar
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default connect(null, mapDispatchToProps)(RegisterSubPage);

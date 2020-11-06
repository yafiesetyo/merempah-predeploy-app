import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Auth } from "../../redux/actions/user/userAction";

import AccountBg from "../../assets/accountBg.png";

const mapDispatchToProps = (dispatch) => {
  return {
    LoginHandler: (username, password) => dispatch(Auth(username, password)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.auth,
  };
};

const LoginSubPage = (props) => {
  let username = React.createRef();
  let password = React.createRef();
  const LoginButtonEventHandler = () => {
    props.LoginHandler(username.current.value, password.current.value);
  };
  console.log("spinner is on ? " + props.data.isLoading);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main-page"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div>
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
                      for="username"
                      style={{ display: "block", fontWeight: "bold" }}
                    >
                      Email atau Username
                    </label>
                    <input
                      placeholder="Email or Username"
                      type="test"
                      id="username"
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "5px",
                      }}
                      ref={username}
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
                      ref={password}
                    />
                  </div>
                  <div
                    className="getting-started-button mt-5"
                    style={{
                      padding: "7px 200px",
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                    }}
                    onClick={LoginButtonEventHandler}
                  >
                    {props.data.isLoading === true ? (
                      <Spinner animation="border" variant="light" />
                    ) : (
                      `Masuk`
                    )}
                  </div>
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
            className="col-lg-6 d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(${AccountBg})`,
              backgroundSize: "100% 150%",
              backgroundPositionY: "-100px",
              padding: "200px",
            }}
          >
            <div>
              <div style={{ color: "white" }}>
                <h3 style={{ fontWeight: "bolder", fontSize: "40px" }}>
                  Halo, Pengguna Merempah
                </h3>
                <div className="d-flex justify-content-center">
                  <div style={{ width: "75%" }}>
                    <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {" "}
                      Silahkan masukkan nama pengguna dan sandimu untuk segera
                      masuk ke platform Merempah
                    </h5>
                    <h5
                      className="mt-5 mb-3"
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Atau jika kamu belum memiliki akun, silahkan klik tombol
                      dibawah ini !
                    </h5>
                    <Link
                      to="/register"
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSubPage);

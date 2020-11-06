import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Spinner } from "react-bootstrap";

import { Register } from "../../redux/actions/user/userAction";

import AccountBg from "../../assets/accountBg.png";

const mapDispatchToProps = (dispatch) => {
  return {
    RegisterHandler: (registerData) => dispatch(Register(registerData)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.register,
  };
};

const RegisterSubPage = (props) => {
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(passwordConfirm);
    const data = new FormData(e.target);
    if (data.get("password") === passwordConfirm) {
      let registerData = {
        full_name: data.get("full_name"),
        username: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
        phone_number: data.get("phone_number"),
      };
      props.RegisterHandler(registerData);
    }
    console.log("selesai");
  };

  return (
    <motion.div
      className="container-fluid main-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
            className="d-flex align-items-center"
            style={{ height: "800px" }}
          >
            <div style={{ color: "white" }}>
              <h3 style={{ fontWeight: "bolder", fontSize: "40px" }}>
                Selamat Datang !
              </h3>
              <div className="d-flex justify-content-center">
                <div style={{ width: "50%" }}>
                  <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {" "}
                    Agar kamu dapat menikmati platform Merempah ini, silahkan
                    untuk mendaftarkan akunmu terlebih dahulu!
                  </h5>
                  <h5
                    className="mt-5 mb-3"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    Atau jika kamu sudah memiliki akun, silahkan klik tombol
                    dibawah ini!
                  </h5>
                  <Link
                    to="/login"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div>
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
              <form onSubmit={handleSubmit}>
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
                    name="full_name"
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
                    name="email"
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
                    name="phone_number"
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
                    name="username"
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
                    name="password"
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
                    onChange={(e) => {
                      setPasswordConfirm(e.target.value);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "5px",
                    }}
                  />
                </div>
                <button
                  className="getting-started-button mt-5"
                  style={{
                    padding: "7px 200px",
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                  }}
                  type="submit"
                >
                  {props.data.isLoading === true ? (
                    <Spinner animation="border" variant="light" />
                  ) : (
                    `Daftar`
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSubPage);

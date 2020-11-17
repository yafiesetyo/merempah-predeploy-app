import React from "react";
import MaterialIcon from "material-icons-react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { showLogin, showRegister } from "../../redux/actions/index";

import wideLogo from "../../assets/wideLogo.png";
import ProfileHeader from "../static/ProfileHeader";

const mapDispatchToProps = (dispatch) => {
  return {
    LoginButtonEventHandler: () => dispatch(showLogin()),
    RegisterButtonEventHandler: () => dispatch(showRegister()),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.auth,
  };
};

const CustomHeader = (props) => {
  console.log("is login ? " + props.data.isLogin);
  return (
    <div className="custom-header">
      <div className="header-first-row">
        <div className="mt-2 ml-4 mr-5 logo-container">
          <img
            src={wideLogo}
            style={{ width: "300px", float: "left" }}
            alt=""
          />
        </div>
        <div className="mt-3 search-box-container">
          <div className="d-flex">
            <input className="custom-search-box" />
            <div className="d-flex justify-content-center align-items-center search-icon-container">
              <div className="mt-2">
                <MaterialIcon icon="search" />
              </div>
            </div>
          </div>
        </div>
        {props.data.isLogin === true ? (
          <ProfileHeader userName={props.data.last_name} />
        ) : (
          <div className="button-container">
            <Link
              to="/login"
              className="button"
              onClick={props.LoginButtonEventHandler}
            >
              Masuk
            </Link>
            <Link
              to="/register"
              className="button button-inverted"
              style={{ marginRight: "1rem" }}
              onClick={props.RegisterButtonEventHandler}
            >
              Daftar
            </Link>
          </div>
        )}
      </div>
      <div className="header-second-row">
        <div className="navbar-container mt-1">
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className="navbar-link"
                activeClassName="active"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="navbar-link"
                activeClassName="active"
              >
                Produk
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articles"
                className="navbar-link"
                activeClassName="active"
              >
                Artikel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className="navbar-link"
                activeClassName="active"
              >
                Pesanan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className="navbar-link"
                activeClassName="active"
              >
                Bantuan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navbar-link"
                activeClassName="active"
              >
                Tentang Merempah
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="misc-icons-container">
          <div className="mr-3 ml-5">
            <NavLink to="/cart" activeClassName="active">
              <MaterialIcon icon="shopping_cart" size={32} color="#964F38" />
            </NavLink>
          </div>
          <div className="mr-3 ">
            <MaterialIcon icon="notifications" size={32} color="#964F38" />
          </div>
          <div className="mr-3">
            <MaterialIcon icon="account_circle" size={32} color="#964F38" />
          </div>
          <div className="mr-3">
            <select className="custom-dropdown">
              <option value="indonesian">ID</option>
              <option value="english">EN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);

import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Pages
import HomeIndex from "./pages/Home/index";
import ProductIndex from "./pages/Product/index";
import ArticleIndex from "./pages/Article/index";
import OrderIndex from "./pages/Order/index";
import HelpIndex from "./pages/Help/index";
import AboutIndex from "./pages/About/index";
import LoginSubPage from "./pages/LoginRegister/LoginSubPage";
import RegisterSubPage from "./pages/LoginRegister/RegisterSubPage";
import CartPage from "./pages/Cart/CartPage";

// static components
import CustomHeader from "./components/static/Header";
import CustomFooter from "./components/static/Footer";

const mapStateToProps = (state) => {
  return {
    loginData: state.auth,
  };
};

function App(props) {
  return (
    <div className="App">
      <CustomHeader />
      <Switch>
        <Route exact path="/">
          <HomeIndex />
        </Route>
        <Route path="/products">
          <ProductIndex />
        </Route>
        <Route path="/articles">
          <ArticleIndex />
        </Route>
        <Route path="/order">
          <OrderIndex />
        </Route>
        <Route path="/help">
          {props.loginData.isLogin === true ? (
            <HelpIndex />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/about">
          <AboutIndex />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/login">
          {props.loginData.isLogin === true ? (
            <Redirect to="/products" />
          ) : (
            <LoginSubPage />
          )}
        </Route>
        <Route path="/register">
          {props.loginData.isLogin === true ? (
            <Redirect to="/products" />
          ) : (
            <RegisterSubPage />
          )}
        </Route>
      </Switch>
      <CustomFooter />
    </div>
  );
}

export default connect(mapStateToProps)(App);

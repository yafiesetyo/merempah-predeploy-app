import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";

// Pages
import HomeIndex from "./pages/Home/index";
import ProductIndex from "./pages/Product/index";
import ArticleIndex from "./pages/Article/index";
import OrderIndex from "./pages/Order/index";
import HelpIndex from "./pages/Help/index";
import AboutIndex from "./pages/About/index";

// static components
import CustomHeader from "./components/static/Header";
import CustomFooter from "./components/static/Footer"

function App() {
  return (
    <div className="App">
      <CustomHeader/>
      <Switch>
        <Route exact path="/">
          <HomeIndex/>
        </Route>
        <Route path="/products">
          <ProductIndex/>
        </Route>
        <Route path="/articles">
          <ArticleIndex/>
        </Route>
        <Route path="/order">
          <OrderIndex/>
        </Route>
        <Route path="/help">
          <HelpIndex/>
        </Route>
        <Route path="/about">
          <AboutIndex/>
        </Route>
      </Switch>
      <CustomFooter/>
    </div>
  );
}

export default App;

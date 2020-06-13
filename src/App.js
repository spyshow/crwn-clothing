import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSingOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingInAndSingOutPage} />
      </Switch>
    </div>
  );
}

export default App;

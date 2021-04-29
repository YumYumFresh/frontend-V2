import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import LandingBg from "./LandingBg";


const Router = () => {
  return (
    <Switch>
      <Route path="/" exact render={LandingBg} />
      <Route path="/yumyum" render={App} />
    </Switch>
  );
};

export default Router;


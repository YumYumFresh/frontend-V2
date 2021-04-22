import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import LandingPage from "./LandingPage";

const Router = () => {
  return (
      <Switch>
        <Route path="/" exact render={LandingPage} />
        <Route path="/yumyum" render={App} />
      </Switch>
  );
};

export default Router;

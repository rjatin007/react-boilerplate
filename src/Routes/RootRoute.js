import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../Components/App/App";

const RootRoute = () => (
  <Router>
    <Switch>
      <Route component={App} />
    </Switch>
  </Router>
);

export default RootRoute;

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import { Provider } from "react-redux";
import store from "store";
import Routes from "components/Routing/Routes";
import Navigation from "views/Layout/Navigation";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>,

  document.getElementById("root")
);

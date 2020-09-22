import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "utils/setAuthToken";
import LandingPage from "views/LandingPage/LandingPage";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import Navigation from "./views/Layout/Navigation";
import { loadUser } from "actions/auth";
import Routes from "components/Routing/Routes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

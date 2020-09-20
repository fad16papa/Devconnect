import { loadUser } from "actions/auth";
import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "views/DashboardPage/DashboardPage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import RegisterPage from "views/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import store from "../../store";
import setAuthToken from "utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Routes = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <section>
      <Fragment>
        <Switch>
          <Route exact path="/profile-page" component={ProfilePage} />
          <Route exact path="/login-page" component={LoginPage} />
          <Route exact path="/register-page" component={RegisterPage} />
          <PrivateRoute
            exact
            path="/dashboard-page"
            component={DashboardPage}
          ></PrivateRoute>
        </Switch>
      </Fragment>
    </section>
  );
};

export default Routes;

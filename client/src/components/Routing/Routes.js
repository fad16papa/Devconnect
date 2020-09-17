import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "views/DashboardPage/DashboardPage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import RegisterPage from "views/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
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

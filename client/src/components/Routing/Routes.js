import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import PrivateRoute from "./PrivateRoute";
import DevboardPage from "views/DevboardPage/DevboardPage.js";
import AccountPage from "views/ProfilePage/Section/AccountPage.js";
import SettingsPage from "views/SettingsPage/SettingsPage.js";

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
            path="/devboard-page"
            component={DevboardPage}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/account-page"
            component={AccountPage}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/settings-page"
            component={SettingsPage}
          ></PrivateRoute>
        </Switch>
      </Fragment>
    </section>
  );
};

export default Routes;

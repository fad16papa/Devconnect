import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import RegisterPage from "views/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import DevboardPage from "views/DevboardPage/DevboardPage";
import AccountPage from "views/ProfilePage/Section/AccountPage";
import SettingsPage from "views/SettingsPage/SettingsPage";

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
            path="/davboard-page"
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

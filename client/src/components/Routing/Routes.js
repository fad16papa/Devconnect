import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import RegisterPage from "views/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import DevboardPage from "views/DevboardPage/DevboardPage";

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
        </Switch>
      </Fragment>
    </section>
  );
};

export default Routes;

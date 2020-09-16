import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "views/DashboardPage/DashboardPage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import RegisterPage from "views/RegisterPage/RegisterPage";

const Routes = () => {
  return (
    <section>
      <Fragment>
        <Switch>
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/register-page" component={RegisterPage} />
          <Route path="/dashboard-page" component={DashboardPage}></Route>
        </Switch>
      </Fragment>
    </section>
  );
};

export default Routes;

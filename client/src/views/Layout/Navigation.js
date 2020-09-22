import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import stylesSocialIcon from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Header from "components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { List, ListItem, Tooltip } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import { logout } from "actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyleSocialIcon = makeStyles(stylesSocialIcon);
const useStyles = makeStyles(styles);

const Navigation = ({ auth: { isAuthenticated }, logout }) => {
  const classesIcons = useStyleSocialIcon();
  const classes = useStyles();
  const dashboardRoutes = [];
  const bannerHeader = (
    <Link to="/">
      {" "}
      <span>
        {" "}
        <i className={classesIcons.socialIcons + " fas fa-code"} /> DevConnect
      </span>
    </Link>
  );

  const authLinks = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="signup-facebook"
          title="Sign Up"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/register-page">
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fas fa-user-plus"} />
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="signin-tooltip"
          title="Sign In"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/login-page">
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fas fa-sign-in-alt"} />
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
    </List>
  );

  const guestLinks = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="devboards "
          title="Developers"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/">
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fas fa-code"} />
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="settings"
          title="Settings"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/register-page">
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fas fa-user-plus"} />
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="logout"
          title="Logout"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/login-page">
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fas fa-sign-out-alt"} />
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
    </List>
  );

  return (
    <Fragment>
      {" "}
      {isAuthenticated ? (
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={bannerHeader}
          rightLinks={authLinks}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        />
      ) : (
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={bannerHeader}
          rightLinks={guestLinks}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        />
      )}
    </Fragment>
  );
};

Navigation.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);

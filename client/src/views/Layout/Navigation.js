import React from "react";
import { Link } from "react-router-dom";
import stylesSocialIcon from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Header from "components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import styles from "assets/jss/material-kit-react/components/headerUserStyle.js";
import { Avatar, List, ListItem, Tooltip, Badge } from "@material-ui/core";

const useStyleSocialIcon = makeStyles(stylesSocialIcon);

const useStyles = makeStyles(styles);
const useNavStyles = makeStyles(navbarsStyle);

const Navigation = ({ auth: { isAuthenticated, user }, logout }) => {
  const classesIcons = useStyleSocialIcon();
  const classes = useStyles();
  const navClass = useNavStyles();
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
    <List className={navClass.list + " " + navClass.mlAuto}>
      <ListItem className={navClass.listItem}>
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </ListItem>
      <ListItem className={navClass.listItem}>
        <CustomDropdown
          left
          caret={false}
          hoverColor="dark"
          buttonText={
            <Avatar alt={user && user.userName} src={user && user.avatar} />
          }
          buttonProps={{
            className: classes.navLink + " " + classes.imageDropdownButton,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/devboard-page">Devboard</Link>,
            <Link to="/profile-page">Account</Link>,
            <Link onClick={logout} to="/">
              Logout
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );

  const guestLinks = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="signup-facebook"
          title="Sign Up"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/register-page">
            <i className={classes.socialIcons + " fas fa-user-plus"} />
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
            <i className={classes.socialIcons + " fas fa-sign-in-alt"} />
          </Link>
        </Tooltip>
      </ListItem>
    </List>
  );

  return (
    <nav>
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
            color: "dark",
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
            color: "dark",
          }}
        />
      )}
    </nav>
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

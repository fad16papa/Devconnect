import React from "react";
import { Link } from "react-router-dom";
import stylesSocialIcon from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Header from "components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "assets/jss/material-kit-react/components/headerUserStyle.js";
import {
  Avatar,
  ClickAwayListener,
  Grow,
  List,
  ListItem,
  MenuItem,
  MenuList,
  Popper,
  Tooltip,
  Button,
  Paper,
} from "@material-ui/core";

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

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  console.log(isAuthenticated);

  const authLinks = (
    // <List className={classes.list}>
    //   <ListItem className={classes.listItem}>
    //     <Tooltip
    //       id="devboards"
    //       title="Devboards"
    //       placement={window.innerWidth > 959 ? "top" : "left"}
    //       classes={{ tooltip: classes.tooltip }}
    //     >
    //       <Link to="/devboard-page">
    //         <i className={classes.socialIcons + " fas fa-code"} />
    //       </Link>
    //     </Tooltip>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Tooltip
    //       id="settings"
    //       title="Settings"
    //       placement={window.innerWidth > 959 ? "top" : "left"}
    //       classes={{ tooltip: classes.tooltip }}
    //     >
    //       <Link to="/settings-page">
    //         <i className={classes.socialIcons + " fas fa-cog"} />
    //       </Link>
    //     </Tooltip>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Tooltip
    //       id="logout"
    //       title="Logout"
    //       placement={window.innerWidth > 959 ? "top" : "left"}
    //       classes={{ tooltip: classes.tooltip }}
    //     >
    //       <Link onClick={logout} to="/">
    //         <i className={classes.socialIcons + " fas fa-sign-out-alt"} />
    //       </Link>
    //     </Tooltip>
    //   </ListItem>
    // </List>

    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <Link to="/devboard-page">Devboards</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <Link to="/settings-page">Settings</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <Link onClick={logout} to="/">
                      Logout
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
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

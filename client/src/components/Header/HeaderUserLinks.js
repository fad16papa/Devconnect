/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderUserLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="devboards"
          title="Devboards"
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
              <i className={classes.socialIcons + " fas fa-cog"} />
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
};

export default HeaderUserLinks;

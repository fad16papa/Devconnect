import React, { Fragment } from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Fab, Tooltip, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Moment from "react-moment";

const useStyles = makeStyles(styles);

const ExperienceSection = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      {" "}
      <span>
        <Tooltip
          id="Edit-Experience"
          title="Edit Experience"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/devboard-page">
            {" "}
            <Fab color="primary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Link>
        </Tooltip>
        <Tooltip
          id="Add-Experience"
          title="Add Experience"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/devboard-page">
            {" "}
            <Fab color="secondary" aria-label="edit">
              <AddIcon />
            </Fab>
          </Link>
        </Tooltip>
      </span>
      <div>
        <strong>
          <h3 className="text-dark">{company}</h3>
        </strong>
        <Typography paragraph>
          <strong>
            <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
            {!to ? " Now" : <Moment format="YYYY/MMM/DD">{to}</Moment>}
          </strong>
        </Typography>
        <Typography paragraph>
          <strong>Postion: </strong>
          {title}
        </Typography>
        <Typography paragraph>
          <strong>Description: </strong>
          {description}
        </Typography>
      </div>
    </Fragment>
  );
};

ExperienceSection.prototype = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceSection;

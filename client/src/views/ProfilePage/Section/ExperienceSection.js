import React, { Fragment } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Fab, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(styles);

const ExperienceSection = () => {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

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
            <Fab color="danger" aria-label="edit">
              <AddIcon />
            </Fab>
          </Link>
        </Tooltip>
      </span>
      <GridContainer justify="center" style={{ marginTop: "1.5em" }}>
        <GridItem xs={12} sm={12} md={4}>
          <img alt="..." src={studio1} className={navImageClasses} />
          <img alt="..." src={studio2} className={navImageClasses} />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <img alt="..." src={studio5} className={navImageClasses} />
          <img alt="..." src={studio4} className={navImageClasses} />
        </GridItem>
      </GridContainer>
    </Fragment>
  );
};

export default ExperienceSection;

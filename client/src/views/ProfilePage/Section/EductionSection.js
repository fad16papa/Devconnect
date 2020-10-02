import React, { Fragment } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Fab, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(styles);

const EductionSection = () => {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <Fragment>
      {" "}
      <span>
        <Tooltip
          id="Edit-Education"
          title="Edit Education"
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
          id="Add-Education"
          title="Add Education"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
          style={{ marginRight: "20px" }}
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
          <img alt="..." src={work4} className={navImageClasses} />
          <img alt="..." src={studio3} className={navImageClasses} />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <img alt="..." src={work2} className={navImageClasses} />
          <img alt="..." src={work1} className={navImageClasses} />
          <img alt="..." src={studio1} className={navImageClasses} />
        </GridItem>
      </GridContainer>
    </Fragment>
  );
};

export default EductionSection;

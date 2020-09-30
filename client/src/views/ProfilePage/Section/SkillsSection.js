import React, { Fragment } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Button, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const SkillsSection = () => {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <Fragment>
      {"  "}
      <span>
        <Button>
          <Tooltip
            id="Edit-Skills"
            title="Edit Skills"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Link to="/devboard-page">
              <i className={classes.socialIcons + " fas fa-edit"} />
            </Link>
          </Tooltip>
        </Button>
      </span>
      <GridContainer justify="center" style={{ marginTop: "1.5em" }}>
        <GridItem xs={12} sm={12} md={4}>
          <img alt="..." src={work1} className={navImageClasses} />
          <img alt="..." src={work2} className={navImageClasses} />
          <img alt="..." src={work3} className={navImageClasses} />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <img alt="..." src={work4} className={navImageClasses} />
          <img alt="..." src={work5} className={navImageClasses} />
        </GridItem>
      </GridContainer>
      <Button>Edit Skills</Button>
    </Fragment>
  );
};

export default SkillsSection;

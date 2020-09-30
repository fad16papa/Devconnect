import React, { Fragment } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";

const useStyles = makeStyles(styles);

const EductionSection = () => {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <Fragment>
      {" "}
      <GridContainer justify="center">
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

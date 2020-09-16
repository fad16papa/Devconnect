import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import stylesSocialIcon from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import HeaderLinks from "components/Header/HeaderLinks";
import Header from "components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyleSocialIcon = makeStyles(stylesSocialIcon);

const Navigation = () => {
  const classesIcons = useStyleSocialIcon();
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
  return (
    <Fragment>
      {" "}
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={bannerHeader}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
    </Fragment>
  );
};

export default Navigation;

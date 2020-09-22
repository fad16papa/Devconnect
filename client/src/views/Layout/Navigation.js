import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import stylesSocialIcon from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Header from "components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderLinks from "components/Header/HeaderLinks";
import HeaderUserLinks from "components/Header/HeaderUserLinks";

const useStyleSocialIcon = makeStyles(stylesSocialIcon);

const Navigation = ({ auth: { isAuthenticated }, logout }) => {
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

  console.log(isAuthenticated);

  return (
    <nav>
      {" "}
      {isAuthenticated ? (
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={bannerHeader}
          rightLinks={<HeaderUserLinks />}
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
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        />
      )}
      {/* <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={bannerHeader}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      /> */}
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

import React, { Fragment, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles(styles);

const ProfilePage = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  console.log(user);
  console.log(profile);

  const classes = useStyles();

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <Fragment>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={user && user.avatar}
                      alt="..."
                      className={classes.name}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{user && user.userName}</h3>
                    <h6>{profile && profile.occupation}</h6>
                    {profile && profile.social.youtube && (
                      <Tooltip title="Youtube">
                        <a href={profile && profile.social.youtube}>
                          <Button justIcon link className={classes.margin5}>
                            <i className={"fab fa-youtube"} />
                          </Button>
                        </a>
                      </Tooltip>
                    )}
                    {profile && profile.social.twitter && (
                      <Tooltip title="Twitter">
                        <a href={profile && profile.social.twitter}>
                          <Button justIcon link className={classes.margin5}>
                            <i className={"fab fa-twitter"} />
                          </Button>
                        </a>
                      </Tooltip>
                    )}
                    {profile && profile.social.instagram && (
                      <Tooltip title="Instagram">
                        <a href={profile && profile.social.instagram}>
                          <Button justIcon link className={classes.margin5}>
                            <i className={"fab fa-instagram"} />
                          </Button>
                        </a>
                      </Tooltip>
                    )}
                    {profile && profile.social.facebook && (
                      <Tooltip title="Facebook">
                        <a href={profile && profile.social.facebook}>
                          <Button justIcon link className={classes.margin5}>
                            <i className={"fab fa-facebook"} />
                          </Button>
                        </a>
                      </Tooltip>
                    )}
                    {profile && profile.social.github && (
                      <Tooltip title="Github">
                        <a href={profile && profile.social.github}>
                          <Button justIcon link className={classes.margin5}>
                            <i className={"fab fa-github"} />
                          </Button>
                        </a>
                      </Tooltip>
                    )}
                    {profile && profile.social.stackoverflow && (
                      <Tooltip title="StackOverFlow">
                        <a href={profile && profile.social.stackoverflow}>
                          <Button justIcon link className={classes.margin5}>
                            <i className={"fab fa-stack-overflow"} />
                          </Button>
                        </a>
                      </Tooltip>
                    )}
                    {profile && profile.social.linkedin && (
                      <Tooltip title="Linkedin">
                        <a href={profile && profile.social.linkedin}>
                          <Button justIcon link className={classes.margin5}>
                            <i className={"fab fa-linkedin-in"} />
                          </Button>
                        </a>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                <h6>{profile && profile.bio}</h6>
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Experience",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Education",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

ProfilePage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(ProfilePage);

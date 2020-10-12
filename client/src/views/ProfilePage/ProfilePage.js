/*eslint-disable*/
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import WorkIcon from "@material-ui/icons/Work";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePageStyle.js";
import Spinner from "views/Layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import SocialSection from "./Section/SocialSection";
import ExperienceSection from "./Section/ExperienceSection";
import Edit from "@material-ui/icons/Edit";
import EductionSection from "./Section/EductionSection";
import SkillsSection from "./Section/SkillsSection";

const useStyles = makeStyles(profilePageStyle);

const ProfilePage = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [getCurrentProfile]);
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Parallax
            image={require("assets/img/examples/city.jpg")}
            filter="dark"
            className={classes.parallax}
          ></Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={user && user.avatar}
                        alt={user && user.userName}
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{user && user.userName}</h3>
                      {profile === null || loading ? (
                        <Spinner />
                      ) : (
                        <SocialSection profile={profile} />
                      )}
                    </div>
                    <div className={classes.description}>
                      <p>{profile && profile.bio}</p>
                    </div>
                  </div>
                  <div className={classes.edit}>
                    <Tooltip
                      id="tooltip-top"
                      title="Edit your Bio"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        round
                        color="primary"
                        className={classes.editButton}
                      >
                        <Edit className={classes.editIcon} />
                      </Button>
                    </Tooltip>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.profileTabs}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Experience",
                      tabIcon: WorkIcon,
                      tabContent: (
                        <Fragment>
                          {profile.experience.length > 0 ? (
                            <ExperienceSection
                              experience={profile.experience}
                            />
                          ) : (
                            <h6>No Experience to display</h6>
                          )}
                        </Fragment>
                      ),
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: AccountTreeIcon,
                      tabContent: (
                        <Fragment>
                          {profile.experience.length > 0 ? (
                            <SkillsSection skills={profile.skills} />
                          ) : (
                            <h6>No Skills to display</h6>
                          )}
                        </Fragment>
                      ),
                    },
                    {
                      tabButton: "Education",
                      tabIcon: CastForEducationIcon,
                      tabContent: (
                        <Fragment>
                          {profile.experience.length > 0 ? (
                            <EductionSection education={profile.education} />
                          ) : (
                            <h6>No Education to display</h6>
                          )}
                        </Fragment>
                      ),
                    },
                  ]}
                />
              </div>
              <Clearfix />
            </div>
          </div>
        </Fragment>
      )}

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

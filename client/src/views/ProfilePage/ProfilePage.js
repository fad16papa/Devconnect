import React, { Fragment, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import WorkIcon from "@material-ui/icons/Work";
import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SocialSection from "./Section/SocialSection";
import Spinner from "views/Layout/Spinner";
import ExperienceSection from "./Section/ExperienceSection";

import SkillsSection from "./Section/SkillsSection";
import EductionSection from "./Section/EductionSection";

const useStyles = makeStyles(styles);

const ProfilePage = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const classes = useStyles();

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
                    {profile === null || loading ? (
                      <Spinner />
                    ) : (
                      <SocialSection profile={profile} />
                    )}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Bio",
                      tabIcon: FingerprintIcon,
                      tabContent: <ExperienceSection />,
                    },
                    {
                      tabButton: "Experience",
                      tabIcon: WorkIcon,
                      tabContent: <ExperienceSection />,
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: EmojiSymbolsIcon,
                      tabContent: <SkillsSection />,
                    },
                    {
                      tabButton: "Education",
                      tabIcon: CastForEducationIcon,
                      tabContent: <EductionSection />,
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

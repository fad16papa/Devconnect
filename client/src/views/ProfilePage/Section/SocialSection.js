import React, { Fragment, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles(styles);

const SocialSection = ({ profile }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {" "}
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
    </Fragment>
  );
};

SocialSection.prototype = {
  profile: PropTypes.object.isRequired,
};

export default SocialSection;

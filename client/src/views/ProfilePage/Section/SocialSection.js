import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles(styles);

const SocialSection = ({ profile: { social, bio, occupation } }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {" "}
      <h6>{occupation && occupation}</h6>
      {social && social.youtube && (
        <Tooltip title="Youtube">
          <a href={social && social.youtube}>
            <Button justIcon link className={classes.margin5}>
              <i className={"fab fa-youtube"} />
            </Button>
          </a>
        </Tooltip>
      )}
      {social && social.twitter && (
        <Tooltip title="Twitter">
          <a href={social && social.twitter}>
            <Button justIcon link className={classes.margin5}>
              <i className={"fab fa-twitter"} />
            </Button>
          </a>
        </Tooltip>
      )}
      {social && social.instagram && (
        <Tooltip title="Instagram">
          <a href={social && social.instagram}>
            <Button justIcon link className={classes.margin5}>
              <i className={"fab fa-instagram"} />
            </Button>
          </a>
        </Tooltip>
      )}
      {social && social.facebook && (
        <Tooltip title="Facebook">
          <a href={social && social.facebook}>
            <Button justIcon link className={classes.margin5}>
              <i className={"fab fa-facebook"} />
            </Button>
          </a>
        </Tooltip>
      )}
      {social && social.github && (
        <Tooltip title="Github">
          <a href={social && social.github}>
            <Button justIcon link className={classes.margin5}>
              <i className={"fab fa-github"} />
            </Button>
          </a>
        </Tooltip>
      )}
      {social && social.stackoverflow && (
        <Tooltip title="StackOverFlow">
          <a href={social && social.stackoverflow}>
            <Button justIcon link className={classes.margin5}>
              <i className={"fab fa-stack-overflow"} />
            </Button>
          </a>
        </Tooltip>
      )}
      {social && social.linkedin && (
        <Tooltip title="Linkedin">
          <a href={social && social.linkedin}>
            <Button justIcon link className={classes.margin5}>
              <i className={"fab fa-linkedin-in"} />
            </Button>
          </a>
        </Tooltip>
      )}
      <div className={classes.description}>
        <p>{bio && bio}</p>
      </div>
    </Fragment>
  );
};

SocialSection.prototype = {
  profile: PropTypes.object.isRequired,
};

export default SocialSection;

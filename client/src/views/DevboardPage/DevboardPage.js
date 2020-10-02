import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";
import CardFooter from "components/Card/CardFooter";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const DevboardPage = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const classes = useStyles();

  const cardStyles = {
    ...imagesStyles,
    cardTitle,
  };

  const cardUseStyles = makeStyles(cardStyles);

  return (
    <Fragment>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{ width: "21rem", marginTop: "8rem" }}>
              <img
                style={{ height: "250px", width: "100%", display: "block" }}
                className={cardUseStyles.imgCardTop}
                src={user && user.avatar}
                alt="Card-img-cap"
              />
              <CardBody>
                <h4 className={cardUseStyles.cardTitle}>
                  {user && user.userName}
                </h4>
                <p>{profile && profile.bio}</p>
                <Link to="/profile-page">
                  <Button color="primary">My Profile</Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <div style={{ marginTop: "8rem" }}>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
              <Card
                className={classes.textCenter}
                style={{ marginTop: "2rem" }}
              >
                <CardBody>
                  <h4 className={classes.cardTitle}>Special title treatment</h4>
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Button color="primary">Do something</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  2 days ago
                </CardFooter>
              </Card>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Fragment>
  );
};

DevboardPage.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(DevboardPage);

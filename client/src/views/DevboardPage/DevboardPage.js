import React, { Fragment } from "react";
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

const useStyles = makeStyles(styles);

const DevboardPage = () => {
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
            <Card style={{ width: "18rem", marginTop: "8rem" }}>
              <img
                style={{ height: "180px", width: "100%", display: "block" }}
                className={cardUseStyles.imgCardTop}
                src="..."
                alt="Card-img-cap"
              />
              <CardBody>
                <h4 className={cardUseStyles.cardTitle}>Card title</h4>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button color="primary">Do something</Button>
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

export default DevboardPage;

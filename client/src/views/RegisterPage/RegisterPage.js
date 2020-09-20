import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/devconnect/Register.jpg";
import { PeopleOutline } from "@material-ui/icons";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
import Alert from "components/Alert/Alert";

const useStyles = makeStyles(styles);

const RegisterPage = ({ setAlert, register, isAuthenticated }) => {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 1000);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const {
    userName,
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert(
        "Password and ConfirmPassword do not match",
        "danger",
        "info_outline"
      );
    } else {
      register({ userName, email, firstName, lastName, password });
    }
  };

  //Redirect user after success register
  if (isAuthenticated) {
    return <Redirect to="/profile-page" />;
  }

  return (
    <Fragment>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
                  <p className={classes.divider}>Sign Up</p>
                  <Alert />
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="UserName..."
                          id="userName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          name="userName"
                          required
                          onChange={(e) => onChange(e)}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="First Name..."
                          id="firstName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          name="firstName"
                          required
                          onChange={(e) => onChange(e)}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <PeopleOutline
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          name="password"
                          required
                          onChange={(e) => onChange(e)}
                          inputProps={{
                            type: "password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            autoComplete: "off",
                          }}
                        />
                      </GridItem>

                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Email..."
                          id="email"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          name="email"
                          required
                          onChange={(e) => onChange(e)}
                          inputProps={{
                            type: "email",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <CustomInput
                          labelText="Last Name..."
                          id="lastName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          name="lastName"
                          required
                          onChange={(e) => onChange(e)}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <PeopleOutline
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="Confirm Password"
                          id="confirmpass"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          name="confirmPassword"
                          required
                          onChange={(e) => onChange(e)}
                          inputProps={{
                            type: "password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            autoComplete: "off",
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit">
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Fragment>
  );
};

RegisterPage.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);

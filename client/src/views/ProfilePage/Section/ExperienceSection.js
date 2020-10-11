import React, { Fragment } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/core icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { connect } from "react-redux";

import { deleteExperience } from "../../../actions/profile.js";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@material-ui/core";
import Moment from "react-moment";

const useStyles = makeStyles(styles);

const fillButtons = [
  { color: "success", icon: Edit },
  { color: "danger", icon: Close },
].map((prop, key) => {
  return (
    <Button justIcon size="sm" color={prop.color} key={key}>
      <prop.icon />
    </Button>
  );
});

const addExperienceButton = [{ color: "info", icon: AddBoxIcon }].map(
  (prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  }
);

const ExperienceSection = ({ experience, deleteExperience }) => {
  const classes = useStyles();

  const experiences = experience.map((exp) => (
    <TableRow key={exp._id}>
      <TableCell component="th" align="center" scope="exp">
        {exp.company}
      </TableCell>
      <TableCell align="center">{exp.title}</TableCell>
      <TableCell align="center">{exp.location}</TableCell>
      <TableCell align="center">
        {<Moment format="YYYY/MM/DD"></Moment> - exp.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </TableCell>
      <TableCell align="center">{exp.description}</TableCell>
      <TableCell align="center">{fillButtons}</TableCell>
    </TableRow>
  ));

  return (
    <Fragment>
      {addExperienceButton}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Years</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{experiences}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

ExperienceSection.prototype = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(ExperienceSection);

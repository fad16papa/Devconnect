import React, { Fragment } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/core icons
import Edit from "@material-ui/icons/Edit";
import { Delete } from "@material-ui/icons";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { connect } from "react-redux";
import Moment from "react-moment";

import { deleteEducation } from "../../../actions/profile.js";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@material-ui/core";

const useStyles = makeStyles(styles);

const addExperienceButton = [{ color: "info", icon: AddBoxIcon }].map(
  (prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  }
);

const EductionSection = ({ education, deleteEducation }) => {
  const classes = useStyles();

  const educations = education.map((edu) => (
    <TableRow key={edu._id}>
      <TableCell component="th" align="center" scope="exp">
        {edu.school}
      </TableCell>
      <TableCell align="center">{edu.degree}</TableCell>
      <TableCell align="center">
        {<Moment format="YYYY/MM/DD"></Moment> - edu.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </TableCell>
      <TableCell align="center">{edu.description}</TableCell>
      <TableCell align="center">
        {" "}
        <Button justIcon size="sm" color="success">
          <Edit />
        </Button>
        <Button
          justIcon
          size="sm"
          color="danger"
          onClick={() => deleteEducation(edu._id)}
        >
          <Delete />
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <Fragment>
      {addExperienceButton}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center">School</TableCell>
              <TableCell align="center">Degree</TableCell>
              <TableCell align="center">Years</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{educations}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

EductionSection.prototype = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(EductionSection);

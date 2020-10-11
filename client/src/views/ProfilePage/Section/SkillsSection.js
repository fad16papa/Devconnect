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
import { deleteSkills } from "../../../actions/profile.js";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@material-ui/core";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

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

const SkillsSection = ({ skills, deleteSkills }) => {
  const classes = useStyles();

  const skill = skills.map((skill) => (
    <TableRow key={skill._id}>
      <TableCell component="th" align="center" scope="exp">
        {skill.name}
      </TableCell>
      {/* <TableCell align="center">{skill.level}</TableCell> */}
      <TableCell>
        <CustomLinearProgress
          variant="determinate"
          color="primary"
          value={25}
        />
      </TableCell>
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
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Level</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{skill}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

SkillsSection.prototype = {
  skills: PropTypes.array.isRequired,
  deleteSkills: PropTypes.func.isRequired,
};

export default connect(null, { deleteSkills })(SkillsSection);

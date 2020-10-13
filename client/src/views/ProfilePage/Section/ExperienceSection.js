import React, { forwardRef, Fragment, useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/core icons
import Edit from "@material-ui/icons/Edit";
import { Close, Delete } from "@material-ui/icons";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { connect } from "react-redux";
import Moment from "react-moment";

import { deleteExperience } from "../../../actions/profile.js";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
} from "@material-ui/core";
import modalStyle from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);
const modalUseStyles = makeStyles(modalStyle);

const ExperienceSection = ({ experience, deleteExperience }) => {
  const [largeModal, setLargeModal] = useState(false);
  const classes = useStyles();
  const modalClasses = modalUseStyles();

  const addExperienceButton = (
    <Fragment>
      <Button
        justIcon
        size="sm"
        color="info"
        onClick={() => setLargeModal(true)}
      >
        <AddBoxIcon />
      </Button>
      <Dialog
        classes={{
          root: modalClasses.modalRoot,
          paper: modalClasses.modal + " " + modalClasses.modalLarge,
        }}
        open={largeModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLargeModal(false)}
        // aria-labelledby="large-modal-slide-title"
        // aria-describedby="large-modal-slide-description"
      >
        <DialogTitle
          id="large-modal-slide-title"
          disableTypography
          className={modalClasses.modalHeader}
        >
          <Button
            simple
            className={modalClasses.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setLargeModal(false)}
          >
            {" "}
            <Close className={modalClasses.modalClose} />
          </Button>
          <h4 className={modalClasses.modalTitle}>Large modal</h4>
        </DialogTitle>
        <DialogContent
          id="large-modal-slide-description"
          className={modalClasses.modalBody}
        >
          <p>...</p>
        </DialogContent>
      </Dialog>
    </Fragment>
  );

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
      <TableCell align="center">
        {" "}
        <Button justIcon size="sm" color="success">
          <Edit />
        </Button>
        <Button
          justIcon
          size="sm"
          color="danger"
          onClick={() => deleteExperience(exp._id)}
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

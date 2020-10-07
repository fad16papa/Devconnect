import React, { Fragment } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import cardStyles from "assets/jss/material-kit-react/views/componentsSections/sectionCards.js";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";

// @material-ui/core icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { connect } from "react-redux";

import { deleteExperience } from "../../../actions/profile.js";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import Moment from "react-moment";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles(styles);
const cardUseStyles = makeStyles(cardStyles);

const ExperienceSection = ({ experience, deleteExperience }) => {
  const classes = useStyles();

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

  const workDate = (
    <div>
      <Moment format="YYYY/MM/DD"></Moment> -{" "}
      {experience.to === null ? (
        " Now"
      ) : (
        <Moment format="YYYY/MM/DD">{experience.to}</Moment>
      )}
    </div>
  );

  const columns = [
    { field: "company", headerName: "Company", width: 150 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "workDate", headerName: "Work date", width: 150 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "action", headerName: "Action", width: 150 },
  ];

  return (
    <Fragment>
      {" "}
      <h6>Experience Credentials</h6>
      {addExperienceButton}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Fragment>
  );
};

ExperienceSection.prototype = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(ExperienceSection);

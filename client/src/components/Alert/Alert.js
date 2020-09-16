import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SnackbarContent from "../../components/Snackbar/SnackbarContent";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id}>
      <SnackbarContent
        message={<span>{alert.msg}</span>}
        color={alert.alertType}
        icon={alert.icon}
      />
    </div>
  ));

Alert.prototype = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

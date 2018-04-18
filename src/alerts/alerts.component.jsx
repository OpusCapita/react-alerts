/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OCAlert } from './alert.component';

import './alerts.scss';

const OCAlertsComponent = function OCAlertsComponent(props) {
  return (
    <div id="global-notification">
      { props.alerts.map(alert =>
        <OCAlert key={alert.id} {...alert} />,
      )}
    </div>
  );
};

OCAlertsComponent.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    translate: PropTypes.bool.isRequired,
    values: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
  })).isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alerts,
});

export const OCAlerts = connect(
  mapStateToProps,
)(OCAlertsComponent);

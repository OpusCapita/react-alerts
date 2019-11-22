/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { OCAlert } from './alert.component';
import './alerts.scss';

const mapStateToProps = state => ({
  alerts: state.alerts,
});

@connect(mapStateToProps)
export class OCAlerts extends React.PureComponent {
  static propTypes = {
    alerts: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
      message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]).isRequired,
      onDismiss: PropTypes.func,
    })).isRequired,
    containerStyle: PropTypes.object, // eslint-disable-line
  }

  static defaultProps = {
    containerStyle: {},
  }

  render() {
    return (
      <div id="global-notification" style={this.props.containerStyle}>
        { this.props.alerts.map(alert => (
          <OCAlert
            key={alert.get('id')}
            id={alert.get('id')}
            type={alert.get('type')}
            message={alert.get('message')}
            onDismiss={alert.get('onDismiss')}
          />
        )) }
      </div>
    );
  }
}

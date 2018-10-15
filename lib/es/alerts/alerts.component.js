var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { OCAlert } from './alert.component';
import './alerts.scss';

var mapStateToProps = function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
};

export var OCAlerts = (_dec = connect(mapStateToProps), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(OCAlerts, _React$PureComponent);

  function OCAlerts() {
    _classCallCheck(this, OCAlerts);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  OCAlerts.prototype.render = function render() {
    return React.createElement(
      'div',
      { id: 'global-notification', style: this.props.containerStyle },
      this.props.alerts.map(function (alert) {
        return React.createElement(OCAlert, {
          key: alert.get('id'),
          id: alert.get('id'),
          type: alert.get('type'),
          message: alert.get('message')
        });
      })
    );
  };

  return OCAlerts;
}(React.PureComponent), _class2.propTypes = {
  alerts: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
  })).isRequired,
  containerStyle: PropTypes.object // eslint-disable-line
}, _class2.defaultProps = {
  containerStyle: {}
}, _temp)) || _class);
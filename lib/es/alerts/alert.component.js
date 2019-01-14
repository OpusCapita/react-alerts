function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { Icon } from '@opuscapita/react-icons';
import { OCAlert as OCAlertActions } from './alerts.actions';

export var OCAlert = function (_React$PureComponent) {
  _inherits(OCAlert, _React$PureComponent);

  function OCAlert() {
    var _temp, _this, _ret;

    _classCallCheck(this, OCAlert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleAlertDismiss = function () {
      OCAlertActions.closeAlert(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  OCAlert.prototype.getIcon = function getIcon() {
    var icons = {
      success: {
        type: 'indicator',
        name: 'ok',
        width: 16,
        height: 16,
        style: {
          marginLeft: '10px'
        }
      },
      info: {
        type: 'product',
        name: 'Info',
        width: 30,
        height: 30
      },
      warning: {
        type: 'indicator',
        name: 'warning',
        width: 25,
        height: 25,
        style: {
          marginLeft: '5px'
        }
      },
      danger: {
        type: 'indicator',
        name: 'error',
        width: 25,
        height: 25,
        style: {
          marginLeft: '5px'
        }
      }
    };
    return React.createElement(Icon, icons[this.props.type]);
  };

  OCAlert.prototype.render = function render() {
    return React.createElement(
      Alert,
      { bsStyle: this.props.type, onDismiss: this.handleAlertDismiss },
      React.createElement(
        'div',
        { className: 'alert-content' },
        React.createElement(
          'div',
          { className: 'alert-icon-container' },
          this.getIcon()
        ),
        React.createElement(
          'span',
          { className: 'alert-message-container' },
          this.props.message
        )
      )
    );
  };

  return OCAlert;
}(React.PureComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkFsZXJ0IiwiSWNvbiIsIk9DQWxlcnQiLCJPQ0FsZXJ0QWN0aW9ucyIsImhhbmRsZUFsZXJ0RGlzbWlzcyIsImNsb3NlQWxlcnQiLCJwcm9wcyIsImlkIiwiZ2V0SWNvbiIsImljb25zIiwic3VjY2VzcyIsInR5cGUiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJpbmZvIiwid2FybmluZyIsImRhbmdlciIsInJlbmRlciIsIm1lc3NhZ2UiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixpQkFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjtBQUNBLFNBQVNDLFdBQVdDLGNBQXBCLFFBQTBDLGtCQUExQzs7QUFFQSxXQUFhRCxPQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0tBbURFRSxrQkFuREYsR0FtRHVCLFlBQU07QUFDekJELHFCQUFlRSxVQUFmLENBQTBCLE1BQUtDLEtBQUwsQ0FBV0MsRUFBckM7QUFDRCxLQXJESDtBQUFBOztBQUFBLG9CQVVFQyxPQVZGLHNCQVVZO0FBQ1IsUUFBTUMsUUFBUTtBQUNaQyxlQUFTO0FBQ1BDLGNBQU0sV0FEQztBQUVQQyxjQUFNLElBRkM7QUFHUEMsZUFBTyxFQUhBO0FBSVBDLGdCQUFRLEVBSkQ7QUFLUEMsZUFBTztBQUNMQyxzQkFBWTtBQURQO0FBTEEsT0FERztBQVVaQyxZQUFNO0FBQ0pOLGNBQU0sU0FERjtBQUVKQyxjQUFNLE1BRkY7QUFHSkMsZUFBTyxFQUhIO0FBSUpDLGdCQUFRO0FBSkosT0FWTTtBQWdCWkksZUFBUztBQUNQUCxjQUFNLFdBREM7QUFFUEMsY0FBTSxTQUZDO0FBR1BDLGVBQU8sRUFIQTtBQUlQQyxnQkFBUSxFQUpEO0FBS1BDLGVBQU87QUFDTEMsc0JBQVk7QUFEUDtBQUxBLE9BaEJHO0FBeUJaRyxjQUFRO0FBQ05SLGNBQU0sV0FEQTtBQUVOQyxjQUFNLE9BRkE7QUFHTkMsZUFBTyxFQUhEO0FBSU5DLGdCQUFRLEVBSkY7QUFLTkMsZUFBTztBQUNMQyxzQkFBWTtBQURQO0FBTEQ7QUF6QkksS0FBZDtBQW1DQSxXQUNFLG9CQUFDLElBQUQsRUFBVVAsTUFBTSxLQUFLSCxLQUFMLENBQVdLLElBQWpCLENBQVYsQ0FERjtBQUdELEdBakRIOztBQUFBLG9CQXVERVMsTUF2REYscUJBdURXO0FBQ1AsV0FDRTtBQUFDLFdBQUQ7QUFBQSxRQUFPLFNBQVMsS0FBS2QsS0FBTCxDQUFXSyxJQUEzQixFQUFpQyxXQUFXLEtBQUtQLGtCQUFqRDtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFBdUMsZUFBS0ksT0FBTDtBQUF2QyxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sV0FBVSx5QkFBaEI7QUFDRyxlQUFLRixLQUFMLENBQVdlO0FBRGQ7QUFGRjtBQURGLEtBREY7QUFTRCxHQWpFSDs7QUFBQTtBQUFBLEVBQTZCdkIsTUFBTXdCLGFBQW5DIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IE9DQWxlcnQgYXMgT0NBbGVydEFjdGlvbnMgfSBmcm9tICcuL2FsZXJ0cy5hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIE9DQWxlcnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddKS5pc1JlcXVpcmVkLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgZ2V0SWNvbigpIHtcbiAgICBjb25zdCBpY29ucyA9IHtcbiAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgdHlwZTogJ2luZGljYXRvcicsXG4gICAgICAgIG5hbWU6ICdvaycsXG4gICAgICAgIHdpZHRoOiAxNixcbiAgICAgICAgaGVpZ2h0OiAxNixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW5mbzoge1xuICAgICAgICB0eXBlOiAncHJvZHVjdCcsXG4gICAgICAgIG5hbWU6ICdJbmZvJyxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgfSxcbiAgICAgIHdhcm5pbmc6IHtcbiAgICAgICAgdHlwZTogJ2luZGljYXRvcicsXG4gICAgICAgIG5hbWU6ICd3YXJuaW5nJyxcbiAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhbmdlcjoge1xuICAgICAgICB0eXBlOiAnaW5kaWNhdG9yJyxcbiAgICAgICAgbmFtZTogJ2Vycm9yJyxcbiAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvbiB7Li4uaWNvbnNbdGhpcy5wcm9wcy50eXBlXX0gLz5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlQWxlcnREaXNtaXNzID0gKCkgPT4ge1xuICAgIE9DQWxlcnRBY3Rpb25zLmNsb3NlQWxlcnQodGhpcy5wcm9wcy5pZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgYnNTdHlsZT17dGhpcy5wcm9wcy50eXBlfSBvbkRpc21pc3M9e3RoaXMuaGFuZGxlQWxlcnREaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1pY29uLWNvbnRhaW5lclwiPnt0aGlzLmdldEljb24oKX08L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGVydC1tZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbGVydD4pO1xuICB9XG59XG4iXX0=
var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { Icon } from '@opuscapita/react-icons';
import { OCAlert as OCAlertActions } from './alerts.actions';

export var OCAlert = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(OCAlert, _React$PureComponent);

  function OCAlert() {
    var _temp, _this, _ret;

    _classCallCheck(this, OCAlert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleAlertDismiss = function () {
      OCAlertActions.closeAlert(_this.props.id);
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
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
          Array.isArray(this.props.message) ? this.props.message.map(function (m) {
            if (typeof m === 'string') {
              return m + '\n';
            }
            return React.createElement(
              React.Fragment,
              null,
              m,
              React.createElement('br', null)
            );
          }) : this.props.message
        )
      )
    );
  };

  return OCAlert;
}(React.PureComponent), _class.defaultProps = {
  onDismiss: null
}, _temp2);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkFsZXJ0IiwiSWNvbiIsIk9DQWxlcnQiLCJPQ0FsZXJ0QWN0aW9ucyIsImhhbmRsZUFsZXJ0RGlzbWlzcyIsImNsb3NlQWxlcnQiLCJwcm9wcyIsImlkIiwib25EaXNtaXNzIiwiZ2V0SWNvbiIsImljb25zIiwic3VjY2VzcyIsInR5cGUiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJpbmZvIiwid2FybmluZyIsImRhbmdlciIsInJlbmRlciIsIkFycmF5IiwiaXNBcnJheSIsIm1lc3NhZ2UiLCJtYXAiLCJtIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixpQkFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjtBQUNBLFNBQVNDLFdBQVdDLGNBQXBCLFFBQTBDLGtCQUExQzs7QUFFQSxXQUFhRCxPQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0tBd0RFRSxrQkF4REYsR0F3RHVCLFlBQU07QUFDekJELHFCQUFlRSxVQUFmLENBQTBCLE1BQUtDLEtBQUwsQ0FBV0MsRUFBckM7QUFDQSxVQUFJLE1BQUtELEtBQUwsQ0FBV0UsU0FBZixFQUEwQjtBQUN4QixjQUFLRixLQUFMLENBQVdFLFNBQVg7QUFDRDtBQUNGLEtBN0RIO0FBQUE7O0FBQUEsb0JBZUVDLE9BZkYsc0JBZVk7QUFDUixRQUFNQyxRQUFRO0FBQ1pDLGVBQVM7QUFDUEMsY0FBTSxXQURDO0FBRVBDLGNBQU0sSUFGQztBQUdQQyxlQUFPLEVBSEE7QUFJUEMsZ0JBQVEsRUFKRDtBQUtQQyxlQUFPO0FBQ0xDLHNCQUFZO0FBRFA7QUFMQSxPQURHO0FBVVpDLFlBQU07QUFDSk4sY0FBTSxTQURGO0FBRUpDLGNBQU0sTUFGRjtBQUdKQyxlQUFPLEVBSEg7QUFJSkMsZ0JBQVE7QUFKSixPQVZNO0FBZ0JaSSxlQUFTO0FBQ1BQLGNBQU0sV0FEQztBQUVQQyxjQUFNLFNBRkM7QUFHUEMsZUFBTyxFQUhBO0FBSVBDLGdCQUFRLEVBSkQ7QUFLUEMsZUFBTztBQUNMQyxzQkFBWTtBQURQO0FBTEEsT0FoQkc7QUF5QlpHLGNBQVE7QUFDTlIsY0FBTSxXQURBO0FBRU5DLGNBQU0sT0FGQTtBQUdOQyxlQUFPLEVBSEQ7QUFJTkMsZ0JBQVEsRUFKRjtBQUtOQyxlQUFPO0FBQ0xDLHNCQUFZO0FBRFA7QUFMRDtBQXpCSSxLQUFkO0FBbUNBLFdBQ0Usb0JBQUMsSUFBRCxFQUFVUCxNQUFNLEtBQUtKLEtBQUwsQ0FBV00sSUFBakIsQ0FBVixDQURGO0FBR0QsR0F0REg7O0FBQUEsb0JBK0RFUyxNQS9ERixxQkErRFc7QUFDUCxXQUNFO0FBQUMsV0FBRDtBQUFBLFFBQU8sU0FBUyxLQUFLZixLQUFMLENBQVdNLElBQTNCLEVBQWlDLFdBQVcsS0FBS1Isa0JBQWpEO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUF1QyxlQUFLSyxPQUFMO0FBQXZDLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTSxXQUFVLHlCQUFoQjtBQUNJYSxnQkFBTUMsT0FBTixDQUFjLEtBQUtqQixLQUFMLENBQVdrQixPQUF6QixJQUNFLEtBQUtsQixLQUFMLENBQVdrQixPQUFYLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxDQUFELEVBQU87QUFDNUIsZ0JBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCLHFCQUFVQSxDQUFWO0FBQ0Q7QUFDRCxtQkFDRTtBQUFDLG1CQUFELENBQU8sUUFBUDtBQUFBO0FBQ0dBLGVBREg7QUFFRTtBQUZGLGFBREY7QUFNRCxXQVZELENBREYsR0FZRSxLQUFLcEIsS0FBTCxDQUFXa0I7QUFiakI7QUFGRjtBQURGLEtBREY7QUFzQkQsR0F0Rkg7O0FBQUE7QUFBQSxFQUE2QjFCLE1BQU02QixhQUFuQyxVQVdTQyxZQVhULEdBV3dCO0FBQ3BCcEIsYUFBVztBQURTLENBWHhCIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IE9DQWxlcnQgYXMgT0NBbGVydEFjdGlvbnMgfSBmcm9tICcuL2FsZXJ0cy5hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIE9DQWxlcnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddKS5pc1JlcXVpcmVkLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uRGlzbWlzczogbnVsbCxcbiAgfVxuXG4gIGdldEljb24oKSB7XG4gICAgY29uc3QgaWNvbnMgPSB7XG4gICAgICBzdWNjZXNzOiB7XG4gICAgICAgIHR5cGU6ICdpbmRpY2F0b3InLFxuICAgICAgICBuYW1lOiAnb2snLFxuICAgICAgICB3aWR0aDogMTYsXG4gICAgICAgIGhlaWdodDogMTYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgdHlwZTogJ3Byb2R1Y3QnLFxuICAgICAgICBuYW1lOiAnSW5mbycsXG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiB7XG4gICAgICAgIHR5cGU6ICdpbmRpY2F0b3InLFxuICAgICAgICBuYW1lOiAnd2FybmluZycsXG4gICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnNXB4JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYW5nZXI6IHtcbiAgICAgICAgdHlwZTogJ2luZGljYXRvcicsXG4gICAgICAgIG5hbWU6ICdlcnJvcicsXG4gICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnNXB4JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEljb24gey4uLmljb25zW3RoaXMucHJvcHMudHlwZV19IC8+XG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUFsZXJ0RGlzbWlzcyA9ICgpID0+IHtcbiAgICBPQ0FsZXJ0QWN0aW9ucy5jbG9zZUFsZXJ0KHRoaXMucHJvcHMuaWQpO1xuICAgIGlmICh0aGlzLnByb3BzLm9uRGlzbWlzcykge1xuICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgYnNTdHlsZT17dGhpcy5wcm9wcy50eXBlfSBvbkRpc21pc3M9e3RoaXMuaGFuZGxlQWxlcnREaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1pY29uLWNvbnRhaW5lclwiPnt0aGlzLmdldEljb24oKX08L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGVydC1tZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgeyBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMubWVzc2FnZSlcbiAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLm1lc3NhZ2UubWFwKChtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHttfVxcbmA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAge219XG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5tZXNzYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQWxlcnQ+KTtcbiAgfVxufVxuIl19
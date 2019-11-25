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
          message: alert.get('message'),
          onDismiss: alert.get('onDismiss')
        });
      })
    );
  };

  return OCAlerts;
}(React.PureComponent), _class2.defaultProps = {
  containerStyle: {}
}, _temp)) || _class);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJjb25uZWN0IiwiT0NBbGVydCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFsZXJ0cyIsInN0YXRlIiwiT0NBbGVydHMiLCJyZW5kZXIiLCJwcm9wcyIsImNvbnRhaW5lclN0eWxlIiwibWFwIiwiYWxlcnQiLCJnZXQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQiwyQkFBL0I7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixtQkFBeEI7QUFDQSxPQUFPLGVBQVA7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQVU7QUFDaENDLFlBQVFDLE1BQU1EO0FBRGtCLEdBQVY7QUFBQSxDQUF4Qjs7QUFLQSxXQUFhRSxRQUFiLFdBRENMLFFBQVFFLGVBQVIsQ0FDRDtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxxQkFrQkVJLE1BbEJGLHFCQWtCVztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxxQkFBUixFQUE4QixPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsY0FBaEQ7QUFDSSxXQUFLRCxLQUFMLENBQVdKLE1BQVgsQ0FBa0JNLEdBQWxCLENBQXNCO0FBQUEsZUFDdEIsb0JBQUMsT0FBRDtBQUNFLGVBQUtDLE1BQU1DLEdBQU4sQ0FBVSxJQUFWLENBRFA7QUFFRSxjQUFJRCxNQUFNQyxHQUFOLENBQVUsSUFBVixDQUZOO0FBR0UsZ0JBQU1ELE1BQU1DLEdBQU4sQ0FBVSxNQUFWLENBSFI7QUFJRSxtQkFBU0QsTUFBTUMsR0FBTixDQUFVLFNBQVYsQ0FKWDtBQUtFLHFCQUFXRCxNQUFNQyxHQUFOLENBQVUsV0FBVjtBQUxiLFVBRHNCO0FBQUEsT0FBdEI7QUFESixLQURGO0FBYUQsR0FoQ0g7O0FBQUE7QUFBQSxFQUE4QmQsTUFBTWUsYUFBcEMsV0FjU0MsWUFkVCxHQWN3QjtBQUNwQkwsa0JBQWdCO0FBREksQ0FkeEIiLCJmaWxlIjoiYWxlcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPQ0FsZXJ0IH0gZnJvbSAnLi9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2FsZXJ0cy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYWxlcnRzOiBzdGF0ZS5hbGVydHMsXG59KTtcblxuQGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKVxuZXhwb3J0IGNsYXNzIE9DQWxlcnRzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWxlcnRzOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdE9mKEltbXV0YWJsZVByb3BUeXBlcy5tYXBDb250YWlucyh7XG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgICAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBjb250YWluZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250YWluZXJTdHlsZToge30sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJnbG9iYWwtbm90aWZpY2F0aW9uXCIgc3R5bGU9e3RoaXMucHJvcHMuY29udGFpbmVyU3R5bGV9PlxuICAgICAgICB7IHRoaXMucHJvcHMuYWxlcnRzLm1hcChhbGVydCA9PiAoXG4gICAgICAgICAgPE9DQWxlcnRcbiAgICAgICAgICAgIGtleT17YWxlcnQuZ2V0KCdpZCcpfVxuICAgICAgICAgICAgaWQ9e2FsZXJ0LmdldCgnaWQnKX1cbiAgICAgICAgICAgIHR5cGU9e2FsZXJ0LmdldCgndHlwZScpfVxuICAgICAgICAgICAgbWVzc2FnZT17YWxlcnQuZ2V0KCdtZXNzYWdlJyl9XG4gICAgICAgICAgICBvbkRpc21pc3M9e2FsZXJ0LmdldCgnb25EaXNtaXNzJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
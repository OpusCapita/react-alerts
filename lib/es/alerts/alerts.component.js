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
}(React.PureComponent), _class2.defaultProps = {
  containerStyle: {}
}, _temp)) || _class);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJjb25uZWN0IiwiT0NBbGVydCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFsZXJ0cyIsInN0YXRlIiwiT0NBbGVydHMiLCJyZW5kZXIiLCJwcm9wcyIsImNvbnRhaW5lclN0eWxlIiwibWFwIiwiYWxlcnQiLCJnZXQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQiwyQkFBL0I7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixtQkFBeEI7QUFDQSxPQUFPLGVBQVA7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQVU7QUFDaENDLFlBQVFDLE1BQU1EO0FBRGtCLEdBQVY7QUFBQSxDQUF4Qjs7QUFLQSxXQUFhRSxRQUFiLFdBRENMLFFBQVFFLGVBQVIsQ0FDRDtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxxQkFpQkVJLE1BakJGLHFCQWlCVztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxxQkFBUixFQUE4QixPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsY0FBaEQ7QUFDSSxXQUFLRCxLQUFMLENBQVdKLE1BQVgsQ0FBa0JNLEdBQWxCLENBQXNCO0FBQUEsZUFDdEIsb0JBQUMsT0FBRDtBQUNFLGVBQUtDLE1BQU1DLEdBQU4sQ0FBVSxJQUFWLENBRFA7QUFFRSxjQUFJRCxNQUFNQyxHQUFOLENBQVUsSUFBVixDQUZOO0FBR0UsZ0JBQU1ELE1BQU1DLEdBQU4sQ0FBVSxNQUFWLENBSFI7QUFJRSxtQkFBU0QsTUFBTUMsR0FBTixDQUFVLFNBQVY7QUFKWCxVQURzQjtBQUFBLE9BQXRCO0FBREosS0FERjtBQVlELEdBOUJIOztBQUFBO0FBQUEsRUFBOEJkLE1BQU1lLGFBQXBDLFdBYVNDLFlBYlQsR0Fhd0I7QUFDcEJMLGtCQUFnQjtBQURJLENBYnhCIiwiZmlsZSI6ImFsZXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgT0NBbGVydCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCAnLi9hbGVydHMuc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGFsZXJ0czogc3RhdGUuYWxlcnRzLFxufSk7XG5cbkBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcylcbmV4cG9ydCBjbGFzcyBPQ0FsZXJ0cyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFsZXJ0czogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3RPZihJbW11dGFibGVQcm9wVHlwZXMubWFwQ29udGFpbnMoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddKS5pc1JlcXVpcmVkLFxuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBjb250YWluZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250YWluZXJTdHlsZToge30sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJnbG9iYWwtbm90aWZpY2F0aW9uXCIgc3R5bGU9e3RoaXMucHJvcHMuY29udGFpbmVyU3R5bGV9PlxuICAgICAgICB7IHRoaXMucHJvcHMuYWxlcnRzLm1hcChhbGVydCA9PiAoXG4gICAgICAgICAgPE9DQWxlcnRcbiAgICAgICAgICAgIGtleT17YWxlcnQuZ2V0KCdpZCcpfVxuICAgICAgICAgICAgaWQ9e2FsZXJ0LmdldCgnaWQnKX1cbiAgICAgICAgICAgIHR5cGU9e2FsZXJ0LmdldCgndHlwZScpfVxuICAgICAgICAgICAgbWVzc2FnZT17YWxlcnQuZ2V0KCdtZXNzYWdlJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
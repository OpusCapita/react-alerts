'use strict';

exports.__esModule = true;
exports.OCAlert = exports.TYPES = undefined;

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable class-methods-use-this */


var TYPES = exports.TYPES = {
  PLATFORM_ALERTS_SHOW: 'PLATFORM_ALERTS_SHOW',
  PLATFORM_ALERTS_DISMISS_ALERT: 'PLATFORM_ALERTS_DISMISS_ALERT',
  PLATFORM_ALERTS_DISMISS_ALL: 'PLATFORM_ALERTS_DISMISS_ALL'
};

var DEFAULT_TIMEOUT = 1500;

var getId = function getId() {
  return (0, _v2.default)();
};

var OCAlertComponent = function OCAlertComponent() {
  var _this = this;

  _classCallCheck(this, OCAlertComponent);

  this.setStore = function (store) {
    _this.store = store;
  };

  this.alertSuccess = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var id = getId();
    var opts = Object.assign({}, { timeOut: DEFAULT_TIMEOUT }, options);
    _this.showAlert(id, 'success', message, opts);
    return id;
  };

  this.alertInfo = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var id = getId();
    var opts = Object.assign({}, { timeOut: DEFAULT_TIMEOUT }, options);
    _this.showAlert(id, 'info', message, opts);
    return id;
  };

  this.alertWarning = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var id = getId();
    var opts = Object.assign({}, options);
    _this.showAlert(id, 'warning', message, opts);
    return id;
  };

  this.alertError = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var id = getId();
    var opts = Object.assign({}, options);
    _this.showAlert(id, 'danger', message, opts);
    return id;
  };

  this.closeAlert = function (id) {
    _this.store.dispatch({
      id: id,
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALERT
    });
  };

  this.closeAlerts = function () {
    _this.store.dispatch({
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALL
    });
  };

  this.showAlert = function (id, type, message, options) {
    _this.store.dispatch({
      id: id,
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: type,
      message: message
    });
    if (options.timeOut) {
      setTimeout(function () {
        return _this.closeAlert(id);
      }, options.timeOut);
    }
  };

  this.store = undefined;
};

var OCAlert = exports.OCAlert = new OCAlertComponent();
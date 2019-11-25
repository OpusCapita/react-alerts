/* eslint-disable class-methods-use-this */
import uuidv1 from 'uuid/v1';

export const TYPES = {
  PLATFORM_ALERTS_SHOW: 'PLATFORM_ALERTS_SHOW',
  PLATFORM_ALERTS_DISMISS_ALERT: 'PLATFORM_ALERTS_DISMISS_ALERT',
  PLATFORM_ALERTS_DISMISS_ALL: 'PLATFORM_ALERTS_DISMISS_ALL',
};

const DEFAULT_TIMEOUT = 3000;

const getId = () => uuidv1();

class OCAlertComponent {
  constructor() {
    this.store = undefined;
  }

  setStore = (store) => {
    this.store = store;
  };

  alertSuccess = (message, options = {}, onDismiss = null) => {
    const id = getId();
    const opts = Object.assign({}, { timeOut: DEFAULT_TIMEOUT }, options);
    this.showAlert(id, 'success', message, opts, onDismiss);
    return id;
  };

  alertInfo = (message, options = {}, onDismiss = null) => {
    const id = getId();
    const opts = Object.assign({}, { timeOut: DEFAULT_TIMEOUT }, options);
    this.showAlert(id, 'info', message, opts, onDismiss);
    return id;
  };

  alertWarning = (message, options = {}, onDismiss = null) => {
    const id = getId();
    const opts = Object.assign({}, options);
    this.showAlert(id, 'warning', message, opts, onDismiss);
    return id;
  };

  alertError = (message, options = {}, onDismiss = null) => {
    const id = getId();
    const opts = Object.assign({}, options);
    this.showAlert(id, 'danger', message, opts, onDismiss);
    return id;
  };

  closeAlert = (id) => {
    this.store.dispatch({
      id,
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALERT,
    });
  };

  closeAlerts = () => {
    this.store.dispatch({
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALL,
    });
  };

  showAlert = (id, type, message, options, onDismiss = null) => {
    this.store.dispatch({
      id,
      message,
      onDismiss,
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: type,
    });
    if (options.timeOut) {
      setTimeout(() => this.closeAlert(id), options.timeOut);
    }
  };
}

export const OCAlert = new OCAlertComponent();

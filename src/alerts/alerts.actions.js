/* eslint-disable class-methods-use-this */
import uuidv1 from 'uuid/v1';

export const TYPES = {
  PLATFORM_ALERTS_SHOW: 'PLATFORM_ALERTS_SHOW',
  PLATFORM_ALERTS_DISMISS_ALERT: 'PLATFORM_ALERTS_DISMISS_ALERT',
  PLATFORM_ALERTS_DISMISS_ALL: 'PLATFORM_ALERTS_DISMISS_ALL',
};

const DEFAULT_TIMEOUT = 1500;

const getId = () => uuidv1();

class OCAlertComponent {
  constructor() {
    this.store = undefined;
  }

  setStore = (store) => {
    this.store = store;
  }

  alertSuccess =(message, options = {}) => {
    const id = getId();
    const opts = Object.assign({}, { timeOut: DEFAULT_TIMEOUT }, options);
    this.showAlert(id, 'success', message, opts);
    return id;
  }

  alertInfo = (message, options = {}) => {
    const id = getId();
    const opts = Object.assign({}, { timeOut: DEFAULT_TIMEOUT }, options);
    this.showAlert(id, 'info', message, opts);
    return id;
  }

  alertWarning = (message, options = {}) => {
    const id = getId();
    const opts = Object.assign({}, options);
    this.showAlert(id, 'warning', message, opts);
    return id;
  }

  alertError = (message, options = {}) => {
    const id = getId();
    const opts = Object.assign({}, options);
    this.showAlert(id, 'danger', message, opts);
    return id;
  }

  closeAlert = (id) => {
    this.store.dispatch({
      id,
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALERT,
    });
  }

  closeAlerts = () => {
    this.store.dispatch({
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALL,
    });
  }

  showAlert = (id, type, message, options) => {
    this.store.dispatch({
      id,
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: type,
      message,
    });
    if (options.timeOut) {
      setTimeout(() => this.closeAlert(id), options.timeOut);
    }
  }
}

export const OCAlert = new OCAlertComponent();

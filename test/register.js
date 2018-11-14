require('babel-register')();
require('ignore-styles');
require('raf/polyfill');
require('global-jsdom')(undefined, {
  url: 'http://localhost',
});

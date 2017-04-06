'use strict';

const di = require('lab-di')();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');

const app = require('./app');
const store = require('./store');
const history = require('./history');

const root = require('./pages/root');

di.registerModule(app, 'App');
di.registerModule(store, 'Store');
di.registerModule(history, 'History');
di.registerModule(root, 'Root');

import test from './services/test';
di.registerModule(test, 'test');

module.exports = di;

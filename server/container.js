'use strict';

const di = require('lab-di')();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');
di.registerModule(require('lab-config/implementations/file'), 'config-file');

module.exports = di;

const loggers = require('./dist/modules/logger');
const actions = require('./dist/modules/webdriverio/actions');
const apiResponseProcesser = require('./dist/modules/request/apiResponseProcesser');
const request = require('./dist/modules/request/makeHttpRequest');
const utilities = require('./dist/utility');
const zaproxy = require('./dist/modules/zaproxy');

module.exports.actions = { ...actions };

module.exports.loggers = { ...loggers };

module.exports.utilities = { ...utilities };

module.exports.httpRequest = { request, ...apiResponseProcesser };

module.exports.zaproxy = { ...zaproxy };

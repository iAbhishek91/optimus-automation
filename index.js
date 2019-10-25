const loggers = require('./dist/modules/logger');
const actions = require('./dist/modules/webdriverio/actions');
const ApiResponseProcesser = require('./dist/modules/request/ApiResponseProcesser');
const utilities = require('./dist/utility');

module.exports.actions = { ...actions };

module.exports.loggers = { ...loggers };

module.exports.utilities = { ...utilities };

module.exports.httpRequest = new ApiResponseProcesser();

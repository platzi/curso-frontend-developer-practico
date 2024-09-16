const { uuid } = require('../plugins/uuid.plugin');
const { getAge } = require('../plugins/getAge.plugin');
const { httpPlugin } = require('./httpClient.plugin');
const buildLogger = require('../plugins/logger.plugin')

module.exports = {
    uuid,
    getAge,
    httpPlugin,
    buildLogger
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { uuid } = require('../plugins/uuid.plugin');
const { getAge } = require('../plugins/getAge.plugin');
const { httpPlugin } = require('./httpClient.plugin');
const logger_plugin_1 = require("./logger.plugin");
module.exports = {
    uuid,
    getAge,
    httpPlugin,
    buildLogger: logger_plugin_1.buildLogger
};

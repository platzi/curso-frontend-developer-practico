"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
const { v4: uuidLibrary } = require('uuid');
const uuid = () => {
    return uuidLibrary();
};
exports.uuid = uuid;
// module.exports = {
//     uuid
// }

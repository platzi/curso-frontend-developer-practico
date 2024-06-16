"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgeLibrary = require('get-age');
const getAge = (birthday) => {
    return getAgeLibrary(birthday);
};
exports.getAge = getAge;
// module.exports = {
//     getAge
// }

"use strict";
// const { uuid } = require('../plugins/uuid.plugin');
// const { getAge } = require('../plugins/getAge.plugin');
// const { uuid, getAge } = require("../plugins")
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPersonFactory = void 0;
const buildPersonFactory = (uuid, getAge) => {
    return (name, birthday) => {
        return {
            id: uuid(),
            name,
            birthday,
            age: getAge(birthday),
        };
    };
};
exports.buildPersonFactory = buildPersonFactory;
// module.exports = {
// 	buildPersonFactory,
// };
// const buildPersonFactory = factoryFuntion.buildPersonFactory;
// const buildPerson = buildPersonFactory(uuid, getAge);
// const fabio = { name: "Fabio", birthday: "04-04-1990" }

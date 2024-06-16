"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findName = exports.users = void 0;
exports.users = [
    {
        id: 1,
        name: "Fabio"
    },
    {
        id: 2,
        name: "Yulieth"
    }
];
function findName(id, callback) {
    const user = exports.users.find(function (user) {
        return user.id == id;
    });
    if (!user)
        return callback(`❌ ERROR!!! No se encontro el usuario!`, null);
    return callback(null, user);
}
exports.findName = findName;
module.exports = {
    findName
};

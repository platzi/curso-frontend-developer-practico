"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroById = void 0;
const heroes_1 = require("../data/heroes");
const findHeroById = (id) => {
    return heroes_1.heroes.find(heroes => heroes.id == id);
};
exports.findHeroById = findHeroById;

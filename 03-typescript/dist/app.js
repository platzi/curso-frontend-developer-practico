"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const heroes_service_1 = require("./services/heroes.service");
const hero = (0, heroes_service_1.findHeroById)(4);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Heroe no encontrado!!');

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { httpPlugin } = require("../plugins");
const getPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = yield httpPlugin.get(url);
    return pokemon;
});
module.exports = getPokemon;
// function getPokemon( id ){
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
//     return fetch(url)
//     .then( rawPokemon => rawPokemon.json())
//     .then( pokemon => pokemon.name)
// }

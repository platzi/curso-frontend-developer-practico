const { httpPlugin } = require("../plugins")

const  getPokemon = async( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const pokemon = await httpPlugin.get( url );
    return pokemon;
}

module.exports = getPokemon;



// function getPokemon( id ){
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
//     return fetch(url)
//     .then( rawPokemon => rawPokemon.json())
//     .then( pokemon => pokemon.name)
// }
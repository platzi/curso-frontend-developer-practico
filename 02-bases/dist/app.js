"use strict";
// const { uuid, getAge } = require("./plugins")
// const promises = require("./js-foundation/06-promises");
const { buildLogger } = require("./plugins");
const loggerPlugin = buildLogger('app.js');
loggerPlugin.log("hola mundo");
loggerPlugin.error("esto es malo");
// promiseGetPoke(2)
// .then( pokemon => console.log(pokemon.name))
// .catch( error => console.log("Intenta de nuevo"))
// .finally(() => console.log('Finalizado'))

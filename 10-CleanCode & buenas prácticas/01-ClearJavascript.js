//> No recomendado
const yyyymmdstr = moment().format( 'YYYY/MM/DD' );
console.log( yyyymmdstr );

//> Recomendado
const currentDate = moment().format( 'YYYY/MM/DD' );
console.log( currentDate );

//> ARRAYS -------------------------------------------//
//> No recomendado
let arrayNames = ['Alex', 'Mariana', 'Cande'];

//> Recomendado
let namesList = ['Alex', 'Mariana', 'Cande'];

//> -------------
//> No recomendado
const user = ['Chris', 'Margaret', 'John']

//> Regular
const userList = ['Chris', 'Margaret', 'John']

//> Bueno
const users = ['Chris', 'Margaret', 'John']

//> Excvelente
const userNames = ['Chris', 'Margaret', 'John']

//> LENGUAJE UBICUO ----------------------------------//
//> No recomendado
getUserInfo();
getClientData();
getCUstomerRecord();

//> Recomendado
getUser();

//> BOOLEANOS ----------------------------------------//
//> No recomendado
const valid = true;
const read = false;
const color= true;

//> Recomendado
const isValid = true;
const canRead = false;
const hasColor = true;

//> NÚMEROS -----------------------------------------//
//> No recomendado
let fruits = 15

//> Recomendado
const maxFruits = 50;
const minFruits = 10;
const totalFruits = 45;

//> FUNCIONES ---------------------------------------//
//> No recomendado
createUserIfNotExist();
updateUserIfNotEmpty();
sendEmailIfValid();

//> Recomendado
createUser();
updateUser();
sendEmail();

//> Ejemplo
getUser();
setUser();
isValidUser();
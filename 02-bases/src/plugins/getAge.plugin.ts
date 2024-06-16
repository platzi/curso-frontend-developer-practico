const getAgeLibrary = require('get-age');

export const getAge: (input: string) => number  = ( birthday: string ) => {
    return getAgeLibrary(birthday);
}

// module.exports = {
//     getAge
// }




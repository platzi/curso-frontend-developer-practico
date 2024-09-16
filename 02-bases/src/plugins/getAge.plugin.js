const getAgeLibrary = require('get-age');

const getAge = ( birthday ) => {
    return getAgeLibrary(birthday);
}

module.exports = {
    getAge
}




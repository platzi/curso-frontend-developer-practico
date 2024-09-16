const { v4: uuidLibrary } = require('uuid');

const uuid = () => {
    return uuidLibrary();
}

module.exports = {
    uuid
}
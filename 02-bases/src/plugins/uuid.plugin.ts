// const { v4: uuidLibrary } = require('uuid');
import {v4 as uuidLibrary } from 'uuid'

export const uuid = () => {
    return uuidLibrary();
}

// module.exports = {
//     uuid
// }


const users = [
    {
        id: 0,
        name: "Fabio"
    },
    {
        id: 1,
        name: "Yulieth"
    }
]

export const findName = ( id: number, callback: any ) => {
    const user =  users.find( user => user.id == id)
    
    if (!user)
        return callback(`❌ ERROR!!! No se encontro el usuario!`, null);
    
    return callback(null, user)
}

// function findName( id, callback ) {
//     const user =  users.find( function ( user ){
//         return user.id == id;
//     } )
    
//     if (!user)
//         return callback(`❌ ERROR!!! No se encontro el usuario!`, null);
    
//     return callback(null, user)
// }

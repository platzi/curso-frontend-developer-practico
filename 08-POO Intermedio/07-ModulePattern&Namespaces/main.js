function requiredParam( param ) {
  throw new Error( param + ' es obligatorio' )
}

function createStudent({
  name = requiredParam( 'name' ),
  age,
  email = requiredParam( 'email' ),
  twitter,
  instagram,
  pinterest,
  approvedCourses = [],
  learnigPaths = [],
}) {
  const private = {
    "_name": name,
  };
  const public = {
    age,
    email,
    approvedCourses,
    learnigPaths,
    socialMedia: {
      twitter,
      instagram,
      pinterest,
    },
    readName() {
      return private["_name"];
    },
    changeName( newName ) {
      private["_name"] = newName;
    },
  };

  Object.defineProperty( public, 'readName', {
    configurable: false,
    writable: false,
  })

  Object.defineProperty( public, 'change Name', {
    configurable: false,
    writable: false,
  })

  return public;
}

// Da error al no completar el campo email
// const cristian = createStudent({
//   name: 'Cristian'
// })

// No da error al completar los campos obligatorios
const juan = createStudent({
  name: 'Juan',
  email: 'juandc@gmail.com',
  twitter: '@juanDC' 
});

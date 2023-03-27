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

    get name() {
      return private["_name"];
    },
    set name( newName ) {
      if( newName.lenght != 0 ) {
        private["_name"] = newName;
      } else {
        console.warn( 'Tu nombre debe tener al menos 1(uno) caracter' )
      }
    },
  };
  
  return public;
}

const juan = createStudent({
  name: 'Juan',
  email: 'juandc@gmail.com',
  twitter: '@juanDC' 
});

const cristian = createStudent({
  name: 'Cristian',
  email: 'cris@gmail.com',
  twitter: '@crisleo'
});

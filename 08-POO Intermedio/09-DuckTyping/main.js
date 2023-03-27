function requiredParam( param ) {
  throw new Error( param + ' es obligatorio' )
}

function isArray( subject ) {
  return Array.isArray( subject );
}

function createLearningPath({
  name = requiredParam( 'name' ),
  courses = [],
}) {
  const private = {
    '_name': name,
    '_courses': courses,
  };

  const public = {
    get name() {
      return private[ "_name" ];
    },
    set name( newName ) {
      if( newName.lenght != 0 ) {
        private[ "_name" ] = newName;
      } else {
        console.warn( 'Tu nombre debe tener al menos 1(uno) caracter' )
      }
    },

    get courses() {
      return private[ "_name" ];
    },
  };

  return public;
}

function createStudent({
  name = requiredParam( 'name' ),
  age,
  email = requiredParam( 'email' ),
  twitter,
  instagram,
  pinterest,
  approvedCourses = [],
  learningPaths = [],
}) {
  const private = {
    "_name": name,
    '_learningPaths': learningPaths,
  };
  const public = {
    age,
    email,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      pinterest,
    },

    get name() {
      return private[ "_name" ];
    },
    set name( newName ) {
      if( newName.lenght != 0 ) {
        private[ "_name" ] = newName;
      } else {
        console.warn( 'Tu nombre debe tener al menos 1(uno) caracter' )
      }
    },
    get learningPaths() {
      return private[ "_learningPaths" ];
    },
    set learningPaths( newLP ) {
      if( !newLP.name ) {
        console.warn( 'El learning path no tiene nombre' );
        return; // este return es para que no se ejecute el resto del código
      } else if( !newLP.courses ) {
        console.warn( 'El learning path no tiene cursos' );
        return;
      } else if( !isArray( newLP.courses ) ) {
        console.warn( 'El learning path no es una lista de (cursos)' );
        return;
      }

      private[ "_learningPaths" ].push( newLP );
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

function requiredParam( param ) {
  throw new Error( param + ' es obligatorio' )
}

function isArray( subject ) {
  return Array.isArray( subject );
}

function deepCopy( subject ) {
  let copySubject;

  const sujectIsArray = isArray( subject );
  const sujectIsObject = isArray( subject );

  if( sujectIsArray ) {
    copySubject = [];
  } else if( sujectIsObject ) {
    copySubject = {};
  } else {
    return subject;
  }

  for( key in subject ) {
    const keyIsObject = isObject( subject[ key ] );

    if( keyIsObject ) {
      copySubject[ key ] = deepCopy( subject[ key ] );
    } else {
      if( sujectIsArray ) {
        copySubject.push( subject[ key ] );
      } else {
        copySubject[ key ] = subject[ key ];
      }
    }
  }

  return copySubject;
}

function SuperObject() {};
SuperObject.isObject = function ( subject ) {
  return typeof subject === 'object';
};

SuperObject.deepCopy = function ( subject ) {
  let copySubject;

  const sujectIsArray = isArray( subject );
  const sujectIsObject = isArray( subject );

  if( sujectIsArray ) {
    copySubject = [];
  } else if( sujectIsObject ) {
    copySubject = {};
  } else {
    return subject;
  }

  for( key in subject ) {
    const keyIsObject = isObject( subject[ key ] );

    if( keyIsObject ) {
      copySubject[ key ] = deepCopy( subject[ key ] );
    } else {
      if( sujectIsArray ) {
        copySubject.push( subject[ key ] );
      } else {
        copySubject[ key ] = subject[ key ];
      }
    }
  }

  return copySubject;
}


function LearningPath({
  name = requiredParam( 'name' ),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam( 'name' ),
  age,
  email = requiredParam( 'email' ),
  twitter,
  instagram,
  pinterest,
  approvedCourses = [],
  learningPaths = [],
}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    pinterest,
  };

  const private = {
    '_learningPaths': [],
  };

  Object.defineProperty( this, 'learningPaths', {
    get() {
      return private[ '_learningPaths' ];
    },
    set( newLP ) {
      if( newLP instanceof LearningPath ) {
        private[ '_learningPaths' ].push( newLP );
      } else {
        console.warn( 'Alguno de los items no es una instancia deL PROTOTIPO LearningPath' );
      }
    },
  });

  for( learningPathIndex in learningPaths ) {
    this.learningPaths = learningPaths[learningPathIndex]
  };
};



const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
});

const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
});

const juan = new Student({
  name: 'Juan',
  email: 'juandc@gmail.com',
  twitter: '@juanDC',
  learningPaths: [
    escuelaWeb,
    escuelaData,
    {
      name: 'Escuela del IMPOSTOR',
      courses: [],
    }
  ],
});

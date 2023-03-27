function requiredParam( param ) {
  throw new Error( param + ' es obligatorio' )
}

function isArray( subject ) {
  return Array.isArray( subject );
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

  if( isArray( learningPaths ) ) {
    this.learningPaths = [];

    for( learningPathIndex in learningPaths ) {
      if( learningPaths[learningPathIndex] instanceof LearningPath ) {
        this.learningPaths.push( learningPaths[ learningPathIndex ] );
      }
    };
  }

  const private = {
    "_name": name,
    '_learningPaths': learningPaths,
  }
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

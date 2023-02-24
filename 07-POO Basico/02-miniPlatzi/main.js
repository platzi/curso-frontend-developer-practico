class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante',
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar() {
    console.log(this.studentName + ' (' + this.studentRole + ')');
    console.log(this.likes + ' Likes');
    console.log(this.content);
  }
}

//////////////////////////////////////////
function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

//////////////////////////////////////////
class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = 'spanish',
  }) {
    this._name = name; // Por conveniencia es un atributo privado
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  get name() {
    return this._name;
  }
  set name( nuevoNombrecito ) {
    if( nuevoNombrecito === 'Curso Malito de Programación Básica' ) {
      console.error('Wey... no')
    } else {
      this._name = nuevoNombrecito;
    }
  }
};

const cursoBasicoHTML = new Course({
  name: 'cursoHTML',
  isFree: true,
});

const cursoBasicoCSS = new Course({
  name: 'cursoCSS',
});

const cursoBasicoJS = new Course({
  name: 'cursoJS',
  lang: 'english'
});

//////////////////////////////////////////
class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
};
const escuelaWeb = new LearningPath({
  name: 'Escuela de desarrollo Web',
  courses: [
    'cursoHTML',
    'cursoCSS',
    'cursoJS',
  ]
});
const escuelaDataScience = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [
    'cursoMatematicas',
    'cursoPython',
    'cursoDataScience',
  ]
});
const escuelaVideoGame = new LearningPath({
  name: 'Escuela de desarrollo de VideoGames',
  courses: [
    'cursoUnity',
    'cursoUnrealEngine',
    'cursoGodot',
  ]
});

//////////////////////////////////////////
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
  publicarComentario( commentContent ) {
    const comment = new Comment ({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
};

class FreeStudent extends Student {
  constructor( props ) {
    super( props ); // Nos permite llamar al constructor de nuestra clase Madre
  }
  approvedCourse(newCourse) {
    if( newCourse.isFree ) {
      this.approvedCourses.push( newCourse );
    } else {
      console.warn( 'Lo sentimos ' + this.name + ', solo puedes tomar cursos abiertos');
    }
  }
};

class BasicStudent extends Student {
  constructor( props ) {
    super( props );
  }
  approvedCourse(newCourse) {
    if( newCourse.lang !== 'english' ) {
      this.approvedCourses.push( newCourse );
    } else {
      console.warn( 'Lo sentimos ' + this.name + ', no puedes tomar cursos en inglés');
    }
  }
};

class ExpertStudent extends Student {
  constructor( props ) {
    super( props );
  }
  approvedCourse(newCourse) {
    this.approvedCourses.push( newCourse );
  }
};

class TeacherStudent extends Student {
  constructor( props ) {
    super( props );
  }
  approvedCourse(newCourse) {
    this.approvedCourses.push( newCourse );
  }
  publicarComentario( commentContent ) {
    const comment = new Comment ({
      content: commentContent,
      studentName: this.name,
      studentRole: 'Profesor',
    });
    comment.publicar();
  }
};

const cristian = new ExpertStudent({
  name: 'Cristian',
  username: 'revelion',
  email: 'cristian@gmail.com',
  twitter: 'revelion1z',
  learningPaths: [
    escuelaWeb,
    escuelaDataScience,
  ]
});

const jose = new FreeStudent({
  name: 'Jose',
  username: 'Josh',
  email: 'jose@gmail.com',
  instagram: 'joshstafe',
  LearningPath: [
    escuelaVideoGame,
    cursoBasicoCSS,
  ]
});

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'freddier@gmail.com',
  instagram: 'freddier',
});

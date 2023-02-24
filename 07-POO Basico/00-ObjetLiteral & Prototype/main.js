// Objeto literal
const natalia = {
  name: 'Natalia Gomez',
  age: 20,
  cursosAprobados: [
    'Curso Definitivo de HTML y CSS', 
    'Curso Práctico de HTML y CSS'
  ],
  aprobarCursos(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

// Hacer que natalia apruebe otro curso
natalia.aprobarCursos('Curso CSS Grid');

/////////////////////////////////////////////////////////////

// Prototito Student
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student('Juanita', 27, ['Curso Práctico de Javasctipt']);
const esteban = new Student('Esteban', 27, ['Curso Práctico de PHP']);

/////////////////////////////////////////////////////////////
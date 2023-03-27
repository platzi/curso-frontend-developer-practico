// RORO es un patrón de diseño que consiste en crear una función que devuelve un objeto.
// RO -> Recibir un objeto
// RO -> Retornar un objeto

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
  return{
    name,
    age,
    email,
    approvedCourses,
    learnigPaths,
    socialMedia: {
      twitter,
      instagram,
      pinterest,
    },
  };
}

// Da error al no completar el campo email
const cristian = createStudent({
  name: 'Cristian'
})

// No da error al completar los campos obligatorios
const juan = createStudent({
  name: 'Juan',
  email: 'juandc@gmail.com',
  twitter: '@juanDC'
});

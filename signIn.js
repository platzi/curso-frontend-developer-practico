//Peticion al set una nueva instancia, con mayúsculas.
const Peticion = new XMLHttpRequest();
const ruta = "https://localhost:7274/user";
let dato = 4;
let nuevaRuta = ruta + "?number="+dato; 
//La ? es necesaria, y la palabra después de ? debe coincidir con
// la variable en el backend
Peticion.open("GET", nuevaRuta);
Peticion.send("data="+dato);

try {
  Peticion.onreadystatechange = function (e) {
    console.log("Estado de la conexión: " + Peticion.readyState)
    console.log("El codigo de la conexión: " + Peticion.status)

    console.log(Peticion.responseText);
  }
} catch (error) {
  console.log('Error: ' + Peticion.status + "--" + error);
}

 // Obtener el botón por su ID
 let signupButton = document.getElementById('signupButton');

 // Agregar un listener para el evento 'click'
 signupButton.addEventListener('click', function () {
   // Redirigir a la URL especificada al hacer clic en el botón
   window.location.href = '../ComponentsHtmlCss/clase4.html';
 });
/*
const ruta2 = "https://localhost:7274/user";
let dato2 = 4;
let nuevaRuta2 = `${ruta2}?number=${dato}`;

fetch(nuevaRuta, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json' // Dependiendo del servidor, ajusta los encabezados según sea necesario
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data); // Aquí se obtiene la respuesta en formato JSON
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});

Daba el siguiente error provocado por no devolver C# un JSON.
signIn.js:43 There has been a problem with your fetch operation: SyntaxError: Unexpected token 'E', "El doble es: 8" is not valid JSON
*/
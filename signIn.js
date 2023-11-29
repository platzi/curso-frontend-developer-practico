//CODE TO TEST SERVER REQUEST
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
   window.location.href = './signUp.html';
 });

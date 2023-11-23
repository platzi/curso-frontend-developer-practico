////////////////// MODIFY this and other functions to ensure the data is appropriate. /////////////
// function verificarContrasena() {
// 	let contrasena = document.getElementById("password").value;
// 	let mensajeFinal = document.getElementById("resultadoContrasena");
// 	let mensajeContrasena = "";
// 	let esContrasenaValida = true;

// 	if (contrasena.length < 8 || contrasena.length > 16) {
// 	  mensajeContrasena += "La contraseña debe tener entre 8 y 16 caracteres.<br>";
// 	  esContrasenaValida = false;
// 	}
// 	if (!/[a-z]/.test(contrasena)) {
// 	  mensajeContrasena += "La contraseña debe tener al menos 1 letra minúscula.<br>";
// 	  esContrasenaValida = false;
// 	}
// 	if (!/[A-Z]/.test(contrasena)) {
// 	  mensajeContrasena += "La contraseña debe tener al menos 1 letra mayúscula.<br>";
// 	  esContrasenaValida = false;
// 	}
// 	if (!/[0-9]/.test(contrasena)) {
// 	  mensajeContrasena += "La contraseña debe tener al menos 1 número.<br>";
// 	  esContrasenaValida = false;
// 	}
// 	if (!/[-_@#$%]/.test(contrasena)) {
// 	  mensajeContrasena += "La contraseña debe tener al menos uno de los siguientes símbolos: - _ @ # $ % <br>";
// 	  esContrasenaValida = false;
// 	}
// 	if (esContrasenaValida) {
// 	  mensajeContrasena = "Contraseña válida."
// 	}
// 	mensajeFinal.innerHTML = mensajeContrasena;
//   }

//Make sure none of the fields are empty and are valid.
let sendUser = document.getElementById("submitButton");
sendUser.addEventListener("click", function (event) {
	event.preventDefault(); //
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	let newUser = {
		Name: name,
		Email: email,
		Password: password
	};

	let xhr = new XMLHttpRequest();
	let route = "https://localhost:7274/addUser";
	// Request configuration
	xhr.open("POST", route, true);//True for Asyncronous.
	xhr.setRequestHeader("Content-Type", "application/json"); //XMLHttpRequest admits JSON and other formats.

	// Convert the JSON objets into a json string
	xhr.send(JSON.stringify(newUser));

	// Manage response once its ready. xhr.onreadystatechange() is also a valid option.
	xhr.onload = function () {
		if (xhr.status === 200) {
			console.log(xhr.response);
			// We could do something with the response, show the data in the console, manipulate DOM...
		} else {
			console.error("Error adding the user:", xhr.responseText);
		}
	};

	xhr.onerror = function () {
		console.error("Request error.");
	};

});

document.getElementById("email").onchange = function () {
	let email = this.value;

	let asyncRequest = new XMLHttpRequest();

	asyncRequest.open('GET', `https://localhost:7274/api/checkUserByEmail?email=${email}`, true);

	asyncRequest.onload = function () {
		if (asyncRequest.status >= 200 && asyncRequest.status < 400) {
			let responseData = JSON.parse(asyncRequest.responseText);
			console.log('Response:', responseData);
		} else {
			console.error('Error:', asyncRequest.status);
		}
	};

	asyncRequest.onerror = function () {
		console.error('Network error.');
	};
	asyncRequest.send();
};



/*
//////////EXAMPLE OF JSON xmlhttprequest:
{
"method": "POST",
"url": "https://api.example.com/users",
"headers": {
  "Content-Type": "application/json",
  "Authorization": "Bearer myAccessToken"
  // Otros encabezados que podrían estar presentes
},
"body": "{\"name\":\"John\",\"email\":\"john@example.com\"}",
"status": 200,
"responseText": "{\"userId\":\"123\",\"message\":\"User created\"}",
// More data.
}


//////////Example of XML XMLHttpRequest:
{
"method": "POST",
"url": "https://api.example.com/data",
"headers": {
  "Content-Type": "application/xml",
  "Authorization": "Bearer myAccessToken"
  // Otros encabezados que podrían estar presentes
},
"body": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><user><name>John</name><email>john@example.com</email></user>",
"status": 200,
"responseText": "<response><userId>123</userId><message>User created</message></response>"
// More data
}

 
 
 
*/
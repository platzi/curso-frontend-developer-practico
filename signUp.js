//////////////// MODIFY this and other functions to ensure the data is appropriate. /////////////

/*
 * This script uses modern JavaScript features to improve readability and maintainability. Key technical aspects include:
 *
 * 1. Anonymous Functions: Utilized in event listeners (e.g., `nameInput.addEventListener("keyup", function () { ... });`) 
 * to define the behavior directly inline without naming the function. This approach encapsulates the logic and avoids polluting the global scope.
 *
 * 2. Arrow Functions: Where appropriate, arrow functions could enhance readability and provide a more concise syntax, especially useful for short callback functions.
 *
 * 3. Fetch API: Used for making HTTP requests. This modern alternative to `XMLHttpRequest` offers a more powerful and flexible 
 * approach to handle requests and responses, utilizing promises for asynchronous operations.
 *
 * 4. JSON Handling: Requests and responses are managed using JSON, a lightweight data interchange format that's easy to read and write. 
 * The code ensures the payload is correctly formatted by using `JSON.stringify()` before sending, and `response.json()` to parse the response.
 *
 * 5. Event Delegation: `addEventListener` is used to attach event listeners to elements, which allows for a modular and responsive design 
 * that reacts to user input in real time.
 *
 * These practices align with modern JavaScript standards and improve the performance, reliability, and scalability of the application.
 */


let sendUser = document.getElementById("submitButton");

let nameInput = document.getElementById("name");

let passwordInput = document.getElementById("password");

let isPasswordValid = true;

let isEmailAvailable = true;

let isNameAvailable = true;

let timeoutId;

function verifyPassword() {
	// Resetting boolean flag
	isPasswordValid = true;
	clearTimeout(timeoutId);

	let password = document.getElementById("password").value;
	let finalMessage = document.getElementById("passwordResult");
	let passwordMessage = "";

	if (password.trim() === '') {
		isPasswordValid = false;
		passwordMessage = "Password cannot be empty.";
	} else {
		if (password.length < 8 || password.length > 16) {
			finalMessage.style.color = "rgb(255, 128, 128)";
			passwordMessage += "Between 8 to 16 characters.<br>";
			isPasswordValid = false;
		}
		if (!/[a-z]/.test(password)) {
			finalMessage.style.color = "rgb(255, 128, 128)";
			passwordMessage += "At least 1 lowercase letter.<br>";
			isPasswordValid = false;
		}
		if (!/[A-Z]/.test(password)) {
			finalMessage.style.color = "rgb(255, 128, 128)";
			passwordMessage += "At least 1 uppercase letter.<br>";
			isPasswordValid = false;
		}
		if (!/[0-9]/.test(password)) {
			finalMessage.style.color = "rgb(255, 128, 128)";
			passwordMessage += "At least 1 number.<br>";
			isPasswordValid = false;
		}
		if (!/[-_@#$%]/.test(password)) {
			finalMessage.style.color = "rgb(255, 128, 128)";
			passwordMessage += "At least one: - _ @ # $ % <br>";
			isPasswordValid = false;
		}
		if (isPasswordValid) {
			finalMessage.style.color = "var(--hospital-green)";
			passwordMessage = "Valid password.";
		}
	}
	finalMessage.innerHTML = passwordMessage;
	console.log(isPasswordValid);
	return isPasswordValid;
}

passwordInput.addEventListener("keyup", () => {
	verifyPassword();
});


// Function to check if all values are valid.
function areValuesValid() {
    if (!passwordIsValid || !isEmailAvailable || !isNameAvailable) {
        console.error("Some of the values are not valid");
        if (!passwordIsValid) {
            console.error("Password is not valid.");
        }
        if (!isEmailAvailable) {
            console.error("Email is not available.");
        }
        if (!isNameAvailable) {
            console.error("Username is not available.");
        }
        return false;
    }
    return true;
}

//// NEW USER POST method with XML http request instead of fetch api.
function sendUserData(newUser) {
    let xhr = new XMLHttpRequest();
    let endpoint = "https://localhost:7202/api/Users/Register"; // MVC endpoint for user registration
    xhr.open("POST", endpoint, true); // Asynchronous request
    xhr.setRequestHeader("Content-Type", "application/json");
    
    // Send the user data as a JSON string
    xhr.send(JSON.stringify(newUser));
    
    // Handle the server's response
    xhr.onload = function () {
        if (xhr.status >= 200) {
            console.log(xhr.response);
            window.location.href = './signIn.html'; // Redirect to sign-in page upon success
        } else {
            console.error("Error adding the user:", xhr.responseText);
        }
    };
    // Handle network or request errors...
    xhr.onerror = function () {
        console.error("Request error.");
    };
}

//Instead of adding an eventListener, onkeyup property is filled with a function with the logic.
//The difference is that addEventListener can "store" more than 1 function to the same event.
document.getElementById("email").onkeyup = function () {
    let emailInput = document.getElementById("email");
    let email = emailInput.value.trim().toLowerCase(); // Convert email to lowercase
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the regex pattern
    if (!emailRegex.test(email)) {
        emailInput.style.backgroundColor = ''; // Reset input style
        isEmailAvailable = true;
        return;
    }

    // Send a request to check email availability
    fetch("https://localhost:7202/api/Users/EmailAvailable", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email }) // Send email as JSON object
    })
    .then(response => response.json())
    .then(data => {
        // Update input background color based on email availability
        if (data.emailAvailable === false) {
            emailInput.style.backgroundColor = "rgb(255, 128, 128)";
            isEmailAvailable = false;
        } else {
            emailInput.style.backgroundColor = "var(--hospital-green)";
            isEmailAvailable = true;
        }
        console.log("Email available:", isEmailAvailable);
    })
    .catch(error => {
        console.error("Error checking email:", error);
        emailInput.style.backgroundColor = ''; // Reset input style on error
        isEmailAvailable = false;
    });
};

// Function to verify username availability
nameInput.addEventListener("keyup", function () {
    let username = nameInput.value.trim().toLowerCase(); // Convert username to lowercase
    let inputEmpty = false;

    // Check if the input is empty
    if (username === '') {
        nameInput.style.backgroundColor = '';
        inputEmpty = true;
        isNameAvailable = true;
    }

    // If input is not empty, send a request to check username availability
    if (!inputEmpty) {
        fetch("https://localhost:7202/api/Users/NameAvailable", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: username }) // Send username as JSON object
        })
        .then(response => response.json())
        .then(data => {
            // Update input background color based on username availability
            if (data.nameAvailable === false) {
                nameInput.style.backgroundColor = "rgb(255, 128, 128)";
                isNameAvailable = false;
            } else {
                nameInput.style.backgroundColor = "var(--hospital-green)";
                isNameAvailable = true;
            }
            console.log("Username available:", isNameAvailable);
        })
        .catch(error => {
            console.error("Error checking username:", error);
            nameInput.style.backgroundColor = ''; // Reset input style on error
            isNameAvailable = false;
        });
    }
});



////// NEW USER EVENT ///// Event listener for the "sendUser" button click event
sendUser.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    isPasswordValid = true;
    passwordIsValid = verifyPassword();

    // Check if all values are valid before sending the request
    if (!areValuesValid()) {
        return;
    }

    // Some of the attributes of the Users class in the back are sent with placeholder values.
    let newUser = {
        Name: name,
        Email: email,
        Password: password,
        Nickname: "nickname",
        Gender: 3, // ENUM value for Gender
        ProfilePictureUrl: "https://example.com/profile.jpg",
        PhoneNumber: "1234567890"
    };

    // Send the user data to the server
    sendUserData(newUser);
});




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





//DEPRECATED EMAIL VERIFICATION

//Instead of adding an eventListener, onkeyup property is filled with a function with the logic.
//The difference is that addEventListener can "store" more than 1 function to the same event.
// let timeoutId;
// let emailNotAvailable = false;

// document.getElementById("email").onkeyup = function () {
// 	let emailInput = document.getElementById("email");
// 	let email = this.value;
// 	let inputEmpty = false;
// 	let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 	// Verificar si el campo está vacío
// 	if (email.trim() === '') {
// 		emailInput.style.backgroundColor = '';
// 		inputEmpty = true;
// 		emailNotAvailable = false;
// 		return;
// 	}
//
// 	if (timeoutId) {
// 		clearTimeout(timeoutId);
// 	}
//
// 	timeoutId = setTimeout(function () {
//
// 		if (emailRegex.test(email) && !inputEmpty) {
// 			let asyncRequest = new XMLHttpRequest();
// 			asyncRequest.open('GET', `/api/checkUserByEmail?email=${encodeURIComponent(email)}`, true);
//
// 			asyncRequest.onload = function () {
// 				if (asyncRequest.status === 200) {
//
// 					emailInput.style.backgroundColor = "rgb(255, 128, 128)";
// 					emailNotAvailable = true;
// 					console.log("Email no disponible (ya existe):", email);
// 				} else if (asyncRequest.status === 404) {
//
// 					emailInput.style.backgroundColor = "var(--hospital-green)";
// 					emailNotAvailable = false;
// 					console.log("Email disponible:", email);
// 				} else {
// 					// Otro error del servidor
// 					console.error("Error en el servidor:", asyncRequest.responseText);
// 					emailInput.style.backgroundColor = '';
// 					emailNotAvailable = false;
// 				}
// 			};
// 			asyncRequest.onerror = function () {
// 				console.error('Error de red al enviar la solicitud.');
// 				emailInput.style.backgroundColor = '';
// 				emailNotAvailable = false;
// 			};

//
// 			asyncRequest.send();
// 		} else {
//
// 			emailInput.style.backgroundColor = '';
// 			emailNotAvailable = false;
// 		}
// 	}, 1200);
// };
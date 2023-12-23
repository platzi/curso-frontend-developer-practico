//////////////// MODIFY this and other functions to ensure the data is appropriate. /////////////
let timeoutId;

let sendUser = document.getElementById("submitButton");

let nameInput = document.getElementById("name");

let passwordInput = document.getElementById("password");

function verifyPassword() {
    clearTimeout(timeoutId); 

    timeoutId = setTimeout(function() {
        let password = document.getElementById("password").value;
        let finalMessage = document.getElementById("passwordResult");
        let passwordMessage = "";
        let isPasswordValid = true;
        let inputEmpty;

        if (password.trim() === '') {
            inputEmpty = false;
        } else {
            inputEmpty = true;
            if (password.length < 8 || password.length > 16) {
                passwordMessage += "Between 8 to 16 characters.<br>";
                isPasswordValid = false;
            }
            if (!/[a-z]/.test(password)) {
                passwordMessage += "At least 1 lowercase letter.<br>";
                isPasswordValid = false;
            }
            if (!/[A-Z]/.test(password)) {
                passwordMessage += "At least 1 uppercase letter.<br>";
                isPasswordValid = false;
            }
            if (!/[0-9]/.test(password)) {
                passwordMessage += "At least 1 number.<br>";
                isPasswordValid = false;
            }
            if (!/[-_@#$%]/.test(password)) {
                passwordMessage += "At least one: - _ @ # $ % <br>";
                isPasswordValid = false;
            }
            if (isPasswordValid) {
				finalMessage.style.color="var(--hospital-green)";
                passwordMessage = "Valid password.";
            }
        }
        finalMessage.innerHTML = passwordMessage;
    }, 1200); // 1200 ms  1.2 seconds delay
	return isPasswordValid;
}

//Make sure none of the fields are empty and are valid.
sendUser.addEventListener("click", function (event) {
	event.preventDefault(); //
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	let newUser = {
		Name: name,
		Email: email,
		Password: password,
		Nickname: "nickname",
		Gender: 3, //ENUM
		ProfilePictureUrl: "https://example.com/profile.jpg",
		PhoneNumber: "1234567890"
	};

	let xhr = new XMLHttpRequest();
	let route = "https://localhost:7202/api/Users/Register"; //MVC: https://localhost:7202/api/Users MINIMAL API: https://localhost:7274/api/Users"
	// Request configuration
	xhr.open("POST", route, true);//True for Asyncronous.
	xhr.setRequestHeader("Content-Type", "application/json"); //XMLHttpRequest admits JSON and other formats.
	//Example of token for session validation sent with http request so the server can check its a valid token/user
	//xhr.setRequestHeader('Authorization', 'Bearer ' + token);

	// Convert the JSON objets into a json string
	xhr.send(JSON.stringify(newUser));

	// Manage response once its ready. xhr.onreadystatechange() is also a valid option.
	xhr.onload = function () {
		if (xhr.status >= 200) { //p
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
//Instead of adding an eventListener, onkeyup property is filled with a function with the logic. 
//The difference is that addEventListener can "store" more than 1 function to the same event.
document.getElementById("email").onkeyup = function () {
    let emailInput = document.getElementById("email");
    let email = this.value;
    let inputEmpty;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === '') {
        emailInput.style.backgroundColor = '';
        inputEmpty = true;
    }

    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function() {
        if (emailRegex.test(email) && !inputEmpty) {
            
            let asyncRequest = new XMLHttpRequest();

            asyncRequest.open('GET', `https://localhost:7274/api/checkUserByEmail?email=${email}`, true);

            asyncRequest.onload = function () {
                if (asyncRequest.status >= 200 && asyncRequest.status < 400) {
                    emailInput.style.backgroundColor = "rgb(255, 128, 128)";
                } else {
                    emailInput.style.backgroundColor = "var(--hospital-green)";
                }
            };

            asyncRequest.onerror = function () {
                console.error('Network error.');
            };
            asyncRequest.send();
        }
    }, 1200); 
}



nameInput.addEventListener("keyup", function () {
	let username = nameInput.value; // 
	let inputEmpty; //Flag to send request or not
	
	if (username.trim() === '') {
		nameInput.style.backgroundColor = '';
		inputEmpty = true;
	}

	if (!inputEmpty) {
		/////////// GET IS THE DEFAULT TYPE OF FETCH IF NOT SPECIFIED ////////////
		// fetch(`https://localhost:7274/api/nameAvaileable?name=${username}`)
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		if (data === true) {
		// 			nameInput.style.backgroundColor = "rgb(255, 128, 128)";
		// 		} else {
		// 			nameInput.style.backgroundColor = "var(--hospital-green)";
		// 		}
		// 	})
		// 	.catch(error => {
		// 		console.error(error);
		// 	});

		/////////// FOR POST:  ////////////
		fetch(`https://localhost:7274/api/nameAvaileable2`, {
			method: 'POST',
			body: JSON.stringify(username),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				if (data === false) {
					nameInput.style.backgroundColor = "rgb(255, 128, 128)";
				} else {
					nameInput.style.backgroundColor = "var(--hospital-green)";
				}
			})
			.catch(error => {
				console.error(error);
			});
	}
});


passwordInput.addEventListener("keyup", () =>{
	verifyPassword();
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
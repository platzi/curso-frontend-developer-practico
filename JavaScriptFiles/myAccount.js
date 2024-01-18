let userId = "";
const token = localStorage.getItem('token1');

const Gender = {
	0: "Male",
	1: "Female",
	2: "NonBinary",
	3: "NonSpecified"
}

// "Buttons"
let editData = document.getElementById("editData");
let changeData = document.getElementById("changeData");

// Father blocks to toggle inactive therefore display: none;
let editDataDiv = document.getElementById("editDataDiv")
let changeDataDiv = document.getElementById("changeDataDiv")

//Click event for "Edit" user data.
editData.addEventListener("click", (event) => {
	event.preventDefault(); //The input tag default behavior reloaded page

	editDataDiv.classList.remove("login");
	editDataDiv.classList.add("inactive");

	changeDataDiv.classList.remove("inactive");
	changeDataDiv.classList.add("login");
});

changeData.addEventListener("click", (event) => {
	event.preventDefault();

	modifyUserData();

	window.alert("Your user data has been updated.")

	window.location.reload();
});

let showName = document.getElementById("showName");
let showEmail = document.getElementById("showEmail");
let showNickname = document.getElementById("showNickname");
let showGender = document.getElementById("showGender");
let showProfilePictureUrl = document.getElementById("showProfilePictureUrl");
let showPhoneNumber = document.getElementById("showPhoneNumber");

let newName = document.getElementById("newName");
let newEmail = document.getElementById("newEmail");
let newNickname = document.getElementById("newNickname");
let newGender = document.getElementById("newGender");
let newProfilePictureUrl = document.getElementById("newProfilePictureUrl");
let newPhoneNumber = document.getElementById("newPhoneNumber");




if (token) {
	// Divide token in its smaller parts. Only using payload though
	const [header, payload, signature] = token.split('.');
	// Decoding payload from ASCII to Binary atob()
	const decodedPayload = atob(payload);
	// Parsing payload of the JWT. The object is complex, contains a lot of information. CHECK
	const payloadObj = JSON.parse(decodedPayload);

	// Accessing Email and using it to show the email in the main page.
	userId = payloadObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
} else {
	console.log('JWT not found.');
}


function showMyAccountUser(myAccountUser) {
	showName.innerText = myAccountUser.name;
	showEmail.innerText = myAccountUser.email;
	showNickname.innerText = myAccountUser.nickname;
	showGender.innerText = Gender[myAccountUser.gender];
	showProfilePictureUrl.innerText = myAccountUser.profilePictureUrl;
	showPhoneNumber.innerText = myAccountUser.phoneNumber;
}

function showMyAccountUserToUpdate(myAccountUser) {
	newName.setAttribute("placeholder", myAccountUser.name);
	newEmail.setAttribute("placeholder", myAccountUser.email);
	newNickname.setAttribute("placeholder", myAccountUser.nickname);
	newGender.setAttribute("placeholder", Gender[myAccountUser.gender]);
	newProfilePictureUrl.setAttribute("placeholder", myAccountUser.profilePictureUrl);
	newPhoneNumber.setAttribute("placeholder", myAccountUser.phoneNumber);
}



async function getUserData() {
	try {

		const userInfoEndpoint = `https://localhost:7202/api/Users/Auth/${userId}`;

		const response = await fetch(userInfoEndpoint, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}` //adding token to the headers
			},
		});
		if (!response.ok) {
			const errorData = await response.text();
			throw new Error('Error retrieving user data: ' + errorData);
		}

		const myAccountUser = await response.json();
		console.log(myAccountUser);

		//POP UP?
		//DOM before edit
		showMyAccountUser(myAccountUser);

		//DOM while editing
		showMyAccountUserToUpdate(myAccountUser);

	} catch (error) {
		console.error('Error retrieving data in:', error.message);
	}
}

getUserData();


// async function modifyUserData() {

// 	try {

// 		const userInfoEndpoint = `https://localhost:7202/api/Users/Auth/Update${userId}`;

// 		const response = await fetch(userInfoEndpoint, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Authorization': `Bearer ${token}` //adding token to the headers
// 			},
// 		});
// 		if (!response.ok) {
// 			const errorData = await response.text();
// 			throw new Error('Error updating user data: ' + errorData);
// 		}

// 		const myAccountUser = await response.json();
// 		console.log(myAccountUser);

// 		// POP UP?

// 	} catch (error) {
// 		console.error('Error retrieving data in:', error.message);
// 	}
// }

async function modifyUserData() {
	try {
		const changeDataUrl = `https://localhost:7202/api/Users/Auth/Update/${userId}`;

		console.log(changeDataUrl);
		// Crear un objeto con los datos del formulario
		const modifiedUser = {
			name: document.getElementById("newName").value,
			email: document.getElementById("newEmail").value,
			password: null, //ELIMINAR?
			nickname: document.getElementById("newNickname").value,
			gender: document.getElementById("newGender").value, //UPDATE THE html predefined value with the actual user value.
			profilePictureUrl: document.getElementById("newProfilePictureUrl").value,
			phoneNumber: document.getElementById("newPhoneNumber").value
		};
		console.log(modifiedUser);

		const response = await fetch(changeDataUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(modifiedUser),
		});

		if (!response.ok) {
			const errorData = await response.text();
			throw new Error('Error updating user data: ' + errorData);
		}

		// POP UP?

	} catch (error) {
		console.error('Error retrieving data in:', error.message);
	}
}
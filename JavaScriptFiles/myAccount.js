let userId = "";
const token = localStorage.getItem('token1');

if (token) {
	// Divide token in its smaller parts. Only using payload though
	const [header, payload, signature] = token.split('.');

	// Decoding payload from ASCII to Binary atob()
	const decodedPayload = atob(payload);

	// Parsing payload of the JWT. The object is complex, contains a lot of information. CHECK
	const payloadObj = JSON.parse(decodedPayload);

	// Accessing Email and using it to show the email in the main page.
	userId = payloadObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

	/////////////  REMAKE   /////////
	// const currentTimeInSeconds = Math.floor(Date.now() / 1000);
	// if (payloadObj.exp && payloadObj.exp < currentTimeInSeconds) {
	//   // Token has expired, remove it from localStorage
	//   localStorage.removeItem('token');
	//   console.log('JWT expired. Removed from localStorage.');
	// }

} else {
	console.log('JWT not found.');
}

console.log(userId);


//añadir JWT a la petición:
async function getUserData() {
	try {
		userid = userId.toUpperCase;
		const userInfoEndpoint = `https://localhost:7202/api/Users/Auth/${userId}`;

		console.log(userInfoEndpoint);
		const token = localStorage.getItem('token1');

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

		showMyAccountUser(myAccountUser);
		console.log(myAccountUser);
	} catch (error) {
		console.error('Error retrieving data in:', error.message);
	}
}

getUserData();


function showMyAccountUser(myAccountUser) {
    document.getElementById("showName").innerText = myAccountUser.name;
    document.getElementById("showEmail").innerText = myAccountUser.email;
    document.getElementById("showNickname").innerText = myAccountUser.nickname;
    document.getElementById("showGender").innerText = myAccountUser.gender;
    document.getElementById("showPofilePictureUrl").innerText = myAccountUser.profilePictureUrl;
    document.getElementById("showPhoneNumber").innerText = myAccountUser.phoneNumber;
}
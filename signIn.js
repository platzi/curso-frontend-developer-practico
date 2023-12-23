document.getElementById('logInButton').addEventListener('click', async function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
        const data = {
            email: email,
            password: password
        };
  
        const response = await fetch('https://localhost:7202/api/Users/Authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
  
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error('Error logging in: ' + errorData);
        }
  
        const responseData = await response.json();
        if (responseData && responseData.token) {
            localStorage.setItem('token1', responseData.token);
            console.log('Login successful. Token:', responseData.token);
            //Redirect to another page / actions after successful login 
        } else {
            throw new Error('No valid token received after authentication');
        }
    } catch (error) {
        console.error('Error logging in:', error.message);
        // More error handling?
    }
  });



let signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', function () {
  // redirect to the following page
  window.location.href = './signUp.html';
});

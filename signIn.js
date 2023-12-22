async function logIn(email, password) {
  try {
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);

    const response = await fetch('https/7202/api/Authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error('Error al iniciar sesión: ' + errorData);
    }

    const data = await response.json();
    if (data && data.token) {
      // Manejar token de JWT recibido, guardar en localStorage para usar en las próximas solicitudes
      localStorage.setItem('token', data.token);
      //// UN RETURN AQUI??? return data.token; // Devuelve el token si se autenticó correctamente
    } else {
      throw new Error('No se recibió un token válido después de la autenticación');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    return { error: 'Error al iniciar sesión. Por favor, inténtalo de nuevo.' };
  }
}


 let signupButton = document.getElementById('signupButton');
 signupButton.addEventListener('click', function () {
   // redirect to the following page
   window.location.href = './signUp.html';
 });

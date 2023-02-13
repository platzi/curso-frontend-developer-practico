//Con esta logica hacemos que el menu aprezca y desaparezca cuando damos click sobre el correo, primero llamamos a los elementos HTML con el query selector y luego con el addEventListener los escuchamos y le decimos el evento y lo que debe hacer con la funcion que creamos

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}


//Con esta logica hacemos que el menu aparezca y desaparezca cuando damos click sobre el correo, primero llamamos a los elementos HTML con el query selector y luego con el addEventListener los escuchamos y le decimos el evento y lo que debe hacer con la funcion que creamos

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}


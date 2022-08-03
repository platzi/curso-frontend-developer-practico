/* Traemos los datos del menu desktop*/ 
const email = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

/* Traemos los datos del menu mobil */
const menuHamburguesa = document.querySelector('.menu');
const menuMobil = document.querySelector('.mobile-menu');

/*  Creamos un evento para cada tipo de menu */
email.addEventListener('click', toggleMenuDesktop);
menuHamburguesa.addEventListener('click', toggleMenuMobil);

/* Creamos las funciones que vamos a ejecutar en el menu desktop*/
function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactivo');
}

/* Creamos las funciones que vamos a ejecutar en el menu mobil*/
function toggleMenuMobil() {
    menuMobil.classList.toggle('inactivo');
}
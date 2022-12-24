/* crear variables para seleccionar elementos del html. */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/* Selector para el menu movil. */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/* escuchar el metodo click que al presionar el email, aparesca y  desaparesca el menu pequeño. */
/* toogle significa intercambiar */
menuEmail.addEventListener('click', toogleDesktopMenu);


menuHamIcon.addEventListener('click', toogleMobileMenu);

/* se crea la funcion que utilizara la propiedad classList para poner o quitar la clase inactive que cree en el archivo styles.css */
function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

/* Creo una nueva funcion para hacer aparecer y desaparecer el menu hamburguesa al presionar el icono de las 3 rayas. */
function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
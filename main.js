/* crear variables para seleccionar elementos del html. */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/* escuchar el metodo click que al presionar el email, aparesca y  desaparesca el menu pequeño. */
/* toogle significa intercambiar */
menuEmail.addEventListener('click', toogleDesktopMenu);

/* se crea la funcion que utilizara la propiedad classList para poner o quitar la clase inactive que cree en el archivo styles.css */
function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
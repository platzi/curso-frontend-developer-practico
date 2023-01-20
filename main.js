const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const botonMemuMB = document.querySelector('.menu');
const menumobile = document.querySelector('.mobile-menu');
//fin de variables

function menuDesplegable() {
    menuDesktop.classList.toggle('inactive');
}
menuEmail.addEventListener('click', menuDesplegable);

function toggleMenuMobile() {
    menumobile.classList.toggle('inactive');
}
botonMemuMB.addEventListener('click', toggleMenuMobile);

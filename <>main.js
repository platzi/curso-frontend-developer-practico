const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIco = document.querySelector('.menu');
const menuMovil = document.querySelector('.mobile-menu');



/* menu interactivo Email */
menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenuIco.addEventListener('click',toggleMovilMenu);

function toggleDesktopMenu() {
    console.log('Click');
    desktopMenu.classList.toggle('inactivo');
}

console.log('js funcionando');

/* menu movil */
function toggleMovilMenu () {
    menuMovil.classList.toggle('inactivo');
}
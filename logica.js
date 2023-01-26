// declarar las variables

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggledesktopMenu );

function toggledesktopMenu () {
    /*el metodo toggle es para que se active o desactive con el click
    en el HTML se debe colocar la clase inactive para que se active */
    desktopMenu.classList.toggle('inactive');
};
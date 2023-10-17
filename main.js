'use strict';

// VARIABLES
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


// FUNCIONES
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}



// EVENTOS
menuEmail.addEventListener('click', toggleDesktopMenu);
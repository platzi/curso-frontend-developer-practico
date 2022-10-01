const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');



//Eventos
eventListeners();
function eventListeners() {
    menuEmail.addEventListener('click', toggleDesktopMenu);
}



//Funciones
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

console.log('Funciona????');
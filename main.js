const divMenuEmail = document.querySelector('.navbar-email');
const divDescktopMenu = document.querySelector('.desktop-menu');

divMenuEmail.addEventListener('click', menuDesplegable);
function menuDesplegable(){
    divDescktopMenu.classList.toggle('inactive');
}

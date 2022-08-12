// boton para mostrar u ocultar el desktop menu
const navbarEmail = document.querySelector('.navbar-email');
// desktop menu
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    // intercambiamos entre agregar o quitar la clase 
    desktopMenu.classList.toggle('inactive')
}
/* aca todo el codigo js para lograr combinar los elementos de los archivos html */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
desktopMenu.classList.toggle('inactive');
}
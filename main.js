/* creamos variable apuntando al elemento */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu );

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}
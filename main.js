const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', togglemenu);

function togglemenu() {
    desktopMenu.classList.toggle('inactive')
}
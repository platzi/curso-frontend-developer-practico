const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleMenu)

function toggleMenu() {
    desktopMenu.classList.toggle('inactive');
}
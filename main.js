const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
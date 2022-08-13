const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', modifyDesktopMenu);

function modifyDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
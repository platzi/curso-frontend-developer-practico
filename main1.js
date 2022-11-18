const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuMail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu(params) {
    desktopMenu.classList.toggle('inactive');
}
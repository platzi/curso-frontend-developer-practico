const menuSmall = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuSmall.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

};
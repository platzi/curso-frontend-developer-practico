const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuEmail.addEventListener('mouseover', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
const menuEmail = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktop.classList.toggle('inactive')
}
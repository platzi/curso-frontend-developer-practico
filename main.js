const menuEmail  = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktoMenu.classList.toggle('inactive');
}
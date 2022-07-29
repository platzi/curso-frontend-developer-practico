const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', mostrarMenu);

function mostrarMenu() {
    desktopMenu.classList.toggle('inactive');
}
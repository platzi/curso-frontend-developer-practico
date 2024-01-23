const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', abrirMenu);

function abrirMenu() {
    desktopMenu.classList.toggle('inactive');
}
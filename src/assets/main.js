const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive');
}
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive');
}
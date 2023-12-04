const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu() {
    desktopMenu.classList.toggle('inactive');
}

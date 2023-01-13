const menuEmail = document.querySelector('.navbar-email');
menuEmail.addEventListener('click', toogleDesktopMenu);

const desktopMenu = document.querySelector('.desktop-menu');

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

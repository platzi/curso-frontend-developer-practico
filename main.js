const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

}

menuEmail.addEventListener('click', toggleDesktopMenu);
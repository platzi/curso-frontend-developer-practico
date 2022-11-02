const emailmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

emailmenu.addEventListener('click', toggleDesktopMenu );
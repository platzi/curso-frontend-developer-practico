const menuEmanil = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmanil.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
const menu_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

menu_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktop_menu.classList.toggle('inactive');
}
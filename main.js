const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

//MENU EMAIL
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
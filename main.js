const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu); //toggle = palanca
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMEnu);

function toggleDesktopMEnu(){
    desktopMenu.classList.toggle('inactive');
}
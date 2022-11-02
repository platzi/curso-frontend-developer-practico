const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',ToggleDesktopMenu);

function ToggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
const menuEmail = document.querySelector('.navbar-email');

menuEmail.addEventListener('click', active);

const desktopMenu = document.querySelector('.desktop-menu');

function active(){
    desktopMenu.classList.toggle('inactive')
}
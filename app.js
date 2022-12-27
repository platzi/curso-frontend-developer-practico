const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleShowDesktopMenu);

function toogleShowDesktopMenu(event){
    event.preventDefault();
    desktopMenu.classList.toggle('inactive')
}
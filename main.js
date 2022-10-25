const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', menuDesktop);

function menuDesktop(){
    desktopMenu.classList.toggle('inactive');
}
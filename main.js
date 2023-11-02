const navbar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navbar.addEventListener('click', toogleMenu);

function toogleMenu(){
desktopMenu.classList.toggle('inactive');
}
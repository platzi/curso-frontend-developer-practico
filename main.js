const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
     DesktopMenu.classList.toggle('inactive');
}
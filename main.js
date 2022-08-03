const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.getElementById('prueba');

menuEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
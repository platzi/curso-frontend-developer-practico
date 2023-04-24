const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggledesktopmenu)

function toggledesktopmenu(){
    desktopMenu.classList.toggle('inactive');
}

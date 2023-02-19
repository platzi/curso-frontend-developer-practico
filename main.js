const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDestockMenu);

function toggleDestockMenu(){
    desktopMenu.classList.toggle('inactive');
}

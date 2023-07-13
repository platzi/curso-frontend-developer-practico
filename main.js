const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('clickeando');
    desktopMenu.classList.toggle('inactive');//toggle -> permite intercambiar
}
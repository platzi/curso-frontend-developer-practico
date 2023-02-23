const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDestopMenu);

function toggleDestopMenu(){
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}
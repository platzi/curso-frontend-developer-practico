const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDeskopMenu);

function toggleDeskopMenu(){
    desktopMenu.classList.toggle('inactive')
}
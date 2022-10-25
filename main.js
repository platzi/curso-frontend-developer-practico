const menuEmail = document.querySelector('.navbar-email');
const deskoptMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    deskoptMenu.classList.toggle('inactive');
}
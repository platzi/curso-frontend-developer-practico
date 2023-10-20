const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    //quita o pone la clase inactive dependiendo si la tiene o no
    desktopMenu.classList.toggle('inactive');
}
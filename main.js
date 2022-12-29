// toogle = intercambiar

const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu() {
    desktopmenu.classList.toggle('inactive');
}
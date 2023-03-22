const menuEmail=document.querySelector('.navbar-email');
const desktopManu=document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopManu.classList.toggle('inactive');
}
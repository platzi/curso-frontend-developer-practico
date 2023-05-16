const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const MovilMenu = document.querySelector('.mobile-menu');


navEmail.addEventListener('click', togglemenu);
MenuHamIcon.addEventListener('click', togglemobilemenu);

function togglemenu() {
    desktopMenu.classList.toggle('inactive')
}

function togglemobilemenu() {
    MovilMenu.classList.toggle('inactive')
}
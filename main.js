// Toggle Desktop Menu

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleMenu);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive')
}


// Toggle Mobile Menu

const desplegableMovil = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

desplegableMovil.addEventListener('click', toggleMobile);

function toggleMobile() {
    mobilMenu.classList.toggle('inactive');
}
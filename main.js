const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const habMenuIcon = document.querySelector('.menu');
const mobileHamMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

habMenuIcon.addEventListener('click', togglemobileHabMenu);

function togglemobileHabMenu () {
    mobileHamMenu.classList.toggle('inactive')
}
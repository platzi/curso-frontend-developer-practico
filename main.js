// con esto haces que el menu pequeño aparesca y se oculte
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobieMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobieMenu);

function toggleDesktopMenu() {
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobieMenu() {
    mobieMenu.classList.toggle('inactive');
}
//Aparece y desaparece el menu del email
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

//Aparece y desaparece el menu de la izquierda
const HamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

HamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
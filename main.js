/* creamos variable apuntando al elemento */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu );
menuHamIcon.addEventListener('click', toggleMobileMenu );

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}
/*+++++++++++++++++++++Setup Desktop++++++++++++++++++++++++++*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/*+++++++++++++++++++++Setup Mobile++++++++++++++++++++++++++*/
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/*+++++++++++++++++++++addEventListener++++++++++++++++++++++++++*/
menuEmail.addEventListener('click', toggleDesktopMenu);     /* Desktop menu */
menuHamIcon.addEventListener('click', toggleMobileMenu);    /* Mobile menu */

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
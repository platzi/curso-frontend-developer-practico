/* Variables */
    /* Menu Desktop */
const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');
    /* Menu Mobile */
const menuLinesLeft = document.querySelector('.menu');
const mobileMenu    = document.querySelector('.mobile-menu');

/* Eventos */
    /* Menu Desktop */
menuEmail.addEventListener('click', toggleDesktopMenu);
    /* Mobile Menu */
menuLinesLeft.addEventListener('click', toggleMobileMenu);

/* Funtions */
    /* Menu Desktop */
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
    /* Mobile Menu */
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
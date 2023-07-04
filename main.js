const menu_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-menu');

menu_email.addEventListener('click', toggleDesktopMenu);
menu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobile.classList.toggle('inactive');
}
const $ = (element) => document.querySelector(element);
const email = $('.navbar-email');
const desktopMenu= $('.desktop-menu');
const menu = $('.menu');
const mobileMenu = $('.mobile-menu');
console.log({menu});

email.addEventListener('click', toggleDesktop)
menu.addEventListener('click', toggleMenu )
function toggleDesktop() {
    desktopMenu.classList.toggle('inactive');
}
function toggleMenu() {
    mobileMenu.classList.toggle('slide-right-menu');
}

// const $ = (selector) =>
// document.querySelector(selector);

// const menuEmail = $('.navbar-email');
// const destokpMenu =('.desktop-menu');

const menuEmail = document.querySelector('.navbar-email');
const destokpMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    destokpMenu.classList.toggle('inactive');
}
const $ = (selector) => document.querySelector(selector);

const desktopMenu = $('.desktop-menu')
const menuEmail =$('.navbar-email');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

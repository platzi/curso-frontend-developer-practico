const s_ = (selector) => 
document.querySelector(selector);

const menuEmail = s_('.navbar-email');
const desktopMenu = s_('.desktop-menu');
const menuHamIcon = s_('.menu');
const mobileMenu = s_('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
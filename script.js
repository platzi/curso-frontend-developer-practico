const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleMenuDesktop);
menuHamIcon.addEventListener('click', toggleMenuMobile);

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive');
}

function toggleMenuMobile() {
    mobileMenu.classList.toggle('inactive');
}

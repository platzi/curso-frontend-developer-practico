const $ = (select) => document.querySelector(select);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const hamburgerIcon = $('.menu');
const mobileMenu = $('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');

}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector( '.desktop-menu');
const menuHamIcon = document.querySelector( '.menu');
const mobileMenu = document.querySelector( '.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    console.log('click email');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('click menu Ham icon');
    mobileMenu.classList.toggle('inactive');
}
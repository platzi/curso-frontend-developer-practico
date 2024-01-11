const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')) {
        aside.classList.toggle('inactive');
    }
}

function toggleMobileMenu() {
    if (!aside.classList.contains('inactive')) {
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }else{
        mobileMenu.classList.toggle('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}
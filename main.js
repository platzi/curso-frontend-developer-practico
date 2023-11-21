const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
mobileMenu.addEventListener("mouseout", outMobil);
desktopMenu.addEventListener("mouseout", outDesktop);
aside.addEventListener("mouseout", outAside);

function toggleDesktopMenu(){
    //desktopMenu.classList.toggle('inactive');
    if(mobileMenu.classList.contains('inactive') || aside.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // mobileMenu.classList.toggle('inactive');
    if(desktopMenu.classList.contains('inactive') || aside.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    if(desktopMenu.classList.contains('inactive') || mobileMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

function outMobil() {
    mobileMenu.classList.toggle('inactive');
}
function outDesktop() {
    desktopMenu.classList.toggle('inactive');
}
function outAside() {
    aside.classList.toggle('inactive');
}
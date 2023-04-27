const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const hamburMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', showDesktopMenu);
hamburMenu.addEventListener('click', showMobileMenu);
carritoMenu.addEventListener('click', showCarritoAside);

function showDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
}

function showMobileMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    };
    mobileMenu.classList.toggle('inactive');
}

function showCarritoAside(){
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileClosed){
        mobileMenu.classList.add('inactive');
    };

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
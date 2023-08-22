const menuEmail = document.querySelector('.navbar-email');
const menuMobileIcon = document.querySelector('.menu');
const shopingCarIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingAside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
shopingCarIcon.addEventListener('click', toggleShoppingAside);

function toggleDesktopMenu(){
    const isShoppingAsideClosed = shoppingAside.classList.contains('inactive');

    if(!isShoppingAsideClosed){
        shoppingAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingAsideClosed = shoppingAside.classList.contains('inactive');

    if(!isShoppingAsideClosed){
        shoppingAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingAside.classList.toggle('inactive');
}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', menuDesktop);
menuHamIcon.addEventListener('click', menuMobile);
menuCarritoIcon.addEventListener('click', menuCarrito);

function menuDesktop(){
    const isAsideclosed  = aside.classList.contains('inactive');
    if(!isAsideclosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function menuMobile(){
    const isAsideclosed = aside.classList.contains('inactive');

    if (!isAsideclosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function menuCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains ('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if (!isMenuDesktopClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
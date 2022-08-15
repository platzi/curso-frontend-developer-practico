const menuEmail = document.querySelector('.navbar-email');
const menuBurguer = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu ');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    desktopMenu.classList.toggle('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
};

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    aside.classList.toggle('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
}
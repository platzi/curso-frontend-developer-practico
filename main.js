const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');

    if(!isMenuEmailClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
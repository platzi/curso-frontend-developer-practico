const menuEmail = document.querySelector('.navbar-email');
const mobileIconMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileIconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive');
    
    if(!isMenuMobileClosed){
        menuMobile.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
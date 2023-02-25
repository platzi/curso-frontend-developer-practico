const s_ = (selector) => 
document.querySelector(selector);

const menuEmail = s_('.navbar-email');
const desktopMenu = s_('.desktop-menu');
const menuHamIcon = s_('.menu');
const mobileMenu = s_('.mobile-menu');
const carritoMenu = s_('.navbar-shopping-cart')
const aside = s_('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoMenu.addEventListener('click', toggleCarritoMenu);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isCarritoMenuClosed = aside.classList.contains('inactive')

    if(!isCarritoMenuClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
        
    }
    
    aside.classList.toggle('inactive')
}
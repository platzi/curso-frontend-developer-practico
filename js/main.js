const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toogleDesktopMenu);
burguerMenu.addEventListener('click', toogleMobileMenu);
navbarShoppingCart.addEventListener('click', toogleAsideDetail);

function toogleDesktopMenu(){
    // Constant that show us if the element isn't being displayed
    const isAsideClosed = aside.classList.contains('inactive');
    
    // if aside is open we add the inactive class to close it
    if (!isAsideClosed){
        aside.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');
    
}

function toogleMobileMenu(){
     // Constant that show us if the element isn't being displayed
    const isAsideClosed = aside.classList.contains('inactive');
    
    // if aside is open we add the inactive class to close it
    if (!isAsideClosed){
        aside.classList.add('inactive');
    } 
    mobileMenu.classList.toggle('inactive');
}

function toogleAsideDetail(){
    // Constant that show us if the element isn't being displayed
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // if mobile menu is open we add the inactive class to close it
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } // Also if desktop menu is open we add the inactive class to close it
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
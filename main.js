const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleCartAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.toggle('inactive');
    
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.toggle('inactive');
    
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    const isMobilMenuClosed = mobileMenu.classList.toggle('inactive');

    if(!isMobilMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

//class 18
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//class 19
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//clase 20
const cartMenu = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleAsideMenu);

function toggleDesktopMenu(){
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    asideMenu.classList.toggle('inactive');
}

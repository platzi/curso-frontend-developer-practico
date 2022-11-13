const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',ToggleDesktopMenu);
menuHamIcon.addEventListener('click',ToggleMobileMenu);
menuCarritoIcon.addEventListener('click',ToogleCarritoAside);

function ToggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function ToggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function ToogleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktomenuClose = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isdesktomenuClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
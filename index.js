const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navBarEmail.addEventListener('click', toggleDesktopMenu);

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuCarritoIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu(){
    const isCartMenuClosed = aside.classList.contains('inactive');

    if(!isCartMenuClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCartMenuClosed = aside.classList.contains('inactive');

    if(!isCartMenuClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
        aside.classList.toggle('inactive');
    
}
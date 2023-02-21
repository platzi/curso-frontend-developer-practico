const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHmIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHmIcon.addEventListener('click', toggleMobileMenu);
menuHmIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    
    const isAsideClosed = aside.classList.contains ('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains ('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
   
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
     aside.classList.toggle('inactive');
}

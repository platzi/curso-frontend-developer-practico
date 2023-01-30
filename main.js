const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
iconCarMenu.addEventListener('click', toggleCarAside);

function toggleDesktopMenu (){
    const isAsideClosed = aside.classList.contains('inactive');
   
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');
   
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    if(!isMobileMenuClosed){
        mobile.classList.add('inactive');
    }
  
    aside.classList.toggle('inactive');
    
    
}
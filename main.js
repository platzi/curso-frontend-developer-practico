const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menuHam');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive'); 

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive'); 

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    // Si contiene la clase inactive, es porque está cerrado.
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDestopMenuClosed = desktopMenu.classList.contains('inactive'); 
   
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    
    if (!isDestopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleAsideCart);

function toggleDesktopMenu(){
    /*Variable validar si aside esta cerrada*/
    const isAsideClosed = aside.classList.contains('inactive');
    
    /*Validación aside esta abierto, cerrarlo*/
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    /*Abrir el mobileMenu*/
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    /*Variable validar si aside esta cerrada*/
    const isAsideClosed = aside.classList.contains('inactive');
    
    /*Validación aside esta abierto, cerrarlo*/
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    /*Abrir el mobileMenu*/
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideCart(){
    /*Variable validar si venta mobileMenu esta cerrada*/
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    /*Variable validar si venta mobileMenu esta cerrada*/
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


    /*Validación mobileMenu esta abierto, cerrarlo*/
    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    /*Validación desktopMenu esta abierto, cerrarlo*/
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    /*Abrir el aside*/
    aside.classList.toggle('inactive');
}


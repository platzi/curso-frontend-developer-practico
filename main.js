
/* Menu Desktop */
const navEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
    const isCarroMenuClosed = carroMenu.classList.contains('inactive');

    if(!isCarroMenuClosed){
        carroMenu.classList.add('inactive');
    }
    dektopMenu.classList.toggle('inactive');    
}

/* Menu Mobile*/
const menuHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuHam.addEventListener('click', toggMobileMenu);

function toggMobileMenu(){
    const isCarroMenuClosed = carroMenu.classList.contains('inactive');
    if(!isCarroMenuClosed){
        carroMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

/* Carrito de compras */

const menuCarroIcon = document.querySelector('.navbar-shopping-cart')
const carroMenu = document.querySelector('.product-detail')

menuCarroIcon.addEventListener('click', toggDesktopMenuCarro);

function toggDesktopMenuCarro(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDektopMenuClosed = dektopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed || !isDektopMenuClosed){
        mobileMenu.classList.add('inactive');
        dektopMenu.classList.add('inactive'); 
    }

    carroMenu.classList.toggle('inactive');
}
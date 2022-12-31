const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuProduct = document.querySelector('.product-detail');
const cartIconMenu = document.querySelector('.navbar-shopping-cart');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartIconMenu.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu(){
    const productMenuClosed = menuProduct.classList.contains('inactive');
    if(!productMenuClosed){
        menuProduct.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive'); 
}

function toggleMobileMenu(){
    const productMenuClosed = menuProduct.classList.contains('inactive');
    if(!productMenuClosed){ // Si el menu de carrito esta abierto cerrarlo:
        menuProduct.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!mobileMenuClosed){ // Si el menu de mobil esta abierto cerrarlo: 
        mobileMenu.classList.add('inactive');
    }
    menuProduct.classList.toggle('inactive');
}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

cartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){

    const isDesktopClosed = desktopMenu.classList.contains('inactive');
    const isMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}
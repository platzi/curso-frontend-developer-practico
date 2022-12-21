const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const cartList = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleCart);

function toggleDesktopMenu(){
    const isCartListClosed = cartList.classList.contains('inactive');
    if(!isCartListClosed){
        cartList.classList.add('inactive');  
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCartListClosed = cartList.classList.contains('inactive');
    if(!isCartListClosed){
        cartList.classList.add('inactive');  
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    cartList.classList.toggle('inactive');
}

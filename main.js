const menuEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu');
const menuShoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCart.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCart.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }    

    shoppingCart.classList.toggle('inactive');
}
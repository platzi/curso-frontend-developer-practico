const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleAsideShopingMenu);

function toggleDesktopMenu(){
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartMenuClosed = asideShoppingCart.classList.contains('inactive');

    if (!isShoppingCartMenuClosed) {
        asideShoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideShopingMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    asideShoppingCart.classList.toggle('inactive');
}

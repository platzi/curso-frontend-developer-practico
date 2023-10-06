const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const cartOrderList = document.querySelector('.product-detail');

function toggleDesktopMenu() {
    const cartListIsClosed = cartOrderList.classList.contains('inactive');
    
    if (!cartListIsClosed) {
        cartOrderList.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const cartListIsClosed = cartOrderList.classList.contains('inactive');
    
    if (!cartListIsClosed) {
        cartOrderList.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleCartOrderList() {
    const mobileMenuIsClosed = mobileMenu.classList.contains('inactive');
    
    if (!mobileMenuIsClosed) {
        mobileMenu.classList.add('inactive');
    }

    cartOrderList.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCartOrderList);
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleShoppingCartMenu);

function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
	mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    shoppingCart.classList.toggle('inactive');
}

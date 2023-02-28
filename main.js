const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingMenu);


function toggleDesktopMenu() {
    const isShoppingMenuClosed = shoppingMenu.classList.contains('inactive');

    if (!isShoppingMenuClosed) {
        shoppingMenu.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingMenuClosed = shoppingMenu.classList.contains('inactive');

    if (!isShoppingMenuClosed) {
        shoppingMenu.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingMenu() {
    const isMovileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMovileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingMenu.classList.toggle('inactive');
    
}


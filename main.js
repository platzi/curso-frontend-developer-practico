//Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Mobile
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Shopping Cart
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCartAside)

//Desktop
function toggleDesktopMenu() {
    const isCartAsideClosed= aside.classList.contains('inactive');

    if(!isCartAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//Mobile
function toggleMobileMenu() {
    const isCartAsideClosed= aside.classList.contains('inactive');

    if(!isCartAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//Shopping Cart
function toggleCartAside() {
    const isMobileMenuClosed= mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

// console.log('JS funcionando')
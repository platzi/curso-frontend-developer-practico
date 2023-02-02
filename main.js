const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const asideCar = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleAsideCar)

function toggleDesktopMenu() {
     const isAsideCarClosed = asideCar.classList.contains('inactive');

    if (!isAsideCarClosed) {
        asideCar.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideCarClosed = asideCar.classList.contains('inactive');

    if (!isAsideCarClosed) {
        asideCar.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideCar() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    asideCar.classList.toggle('inactive');

}
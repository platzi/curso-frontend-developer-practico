const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');

menuMail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAsideProductDetail);

function toggleDesktopMenu() {
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if (!isAsideClosed) {
        asideProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if (!isAsideClosed) {
        asideProductDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } 

    asideProductDetail.classList.toggle('inactive');
}
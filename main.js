const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const detailProduct = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu (){
    const isDetaiProductClosed = detailProduct.classList.contains('inactive');

    if (!isDetaiProductClosed) {
        detailProduct.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isDetaiProductClosed = detailProduct.classList.contains('inactive');

    if (!isDetaiProductClosed) {
        detailProduct.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    detailProduct.classList.toggle('inactive');
}

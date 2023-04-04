const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconoCarritoCompras = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const IsAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');

    if (!IsAsideProductDetailClosed) {
        asideProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

menuBurger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    IsAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');
    if (!IsAsideProductDetailClosed) {
        asideProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}


iconoCarritoCompras.addEventListener('click', toggleAsideProductDetail);

function toggleAsideProductDetail() {

    const IsmobileMenuClosed = mobileMenu.classList.contains('inactive');
    const IsDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!IsDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!IsmobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    asideProductDetail.classList.toggle('inactive');
}
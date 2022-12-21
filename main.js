const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCar)

function toggleDesktopMenu() {
    const isAsideClose = productDetail.classList.contains('inactive')
    if (!isAsideClose) {
        //si mobileMenu esta open, hay que cerrarlo
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClose = productDetail.classList.contains('inactive')
    if (!isAsideClose) {
        //si mobileMenu esta open, hay que cerrarlo
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')


    if (!isMobileMenuClose) {
        //si mobileMenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }
    productDetail.classList.toggle('inactive')

}


const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburguerButton = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu)
hamburguerButton.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    } else if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }

    productDetail.classList.toggle('inactive')
}
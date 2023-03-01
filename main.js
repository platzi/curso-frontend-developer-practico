const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguesa.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleProductDetail)


function toggleDesktopMenu() {
    if (!(productDetail.classList.contains('inactive'))){
        productDetail.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive')


}

function toggleMobileMenu() {
    if (!(productDetail.classList.contains('inactive'))){
        productDetail.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleProductDetail(){
    mobileMenuIsOpen = !(mobileMenu.classList.contains('inactive'))
    desktopMenuIsOpen = !(desktopMenu.classList.contains('inactive'))

    if (mobileMenuIsOpen){
        mobileMenu.classList.toggle('inactive')
    }
    if (desktopMenuIsOpen){
        desktopMenu.classList.toggle('inactive')
    }
    productDetail.classList.toggle('inactive')
}
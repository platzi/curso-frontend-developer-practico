const navbarEmail= document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu= document.querySelector('.mobile-menu')
const imgMenuMobile= document.querySelector('.menu')
const carritoCompras= document.querySelector('.navbar-shopping-cart')
const productDetail= document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu)
imgMenuMobile.addEventListener('click', toggleMobileMenu)
carritoCompras.addEventListener('click', toggleAsideShoppingCart)

function toggleDesktopMenu(){
    productDetail.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')

}   
function toggleMobileMenu(){
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');

}
function toggleAsideShoppingCart(){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        productDetail.classList.toggle('inactive')

}


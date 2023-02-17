const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//mobile menu
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//shopping cart
const shoppingBasket = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

//Eventos
menuEmail.addEventListener('click', function(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    desktopMenu.classList.toggle('inactive')
    //hide product detail when click on desktopmenu
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }

})

// mobile menu
burguerMenu.addEventListener('click', function(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    mobileMenu.classList.toggle('inactive')
    //hide product detail when click on mobile menu
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }
})

// show products detail
shoppingBasket.addEventListener('click', function(){
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    productDetail.classList.toggle('inactive')
    //hide desktopmenul when click on product detail
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    }
})



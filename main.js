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
    desktopMenu.classList.toggle('inactive')
    //hide desktopmenu when click on product detail
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive')
    }
})

// mobile menu
burguerMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('inactive')
})

// show products detail
shoppingBasket.addEventListener('click', function(){
    productDetail.classList.toggle('inactive')
    //hide product detail when click on desktopmenu
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }
})



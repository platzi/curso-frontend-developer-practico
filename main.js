const nav_bar = document.querySelector(".navbar-email")
const nav_email = document.querySelector(".desktop-menu")
const menu = document.querySelector(".menu")
const mobileMenu= document.querySelector(".mobile-menu")
const productDetail = document.querySelector(".product-detail")
const shoppingCart = document.querySelector(".shopping-cart-image")

function quitarInactive(){
nav_email.classList.toggle ("inactive")
productDetail.classList.add("inactive")
}

function quitarInactive2(){
    mobileMenu.classList.toggle ("inactive")
    productDetail.classList.add ("inactive")
}

function quitarInactive3(){
    productDetail.classList.toggle("inactive")
    nav_email.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}

nav_bar.addEventListener("click", quitarInactive)
menu.addEventListener("click", quitarInactive2)
shoppingCart.addEventListener ("click", quitarInactive3)
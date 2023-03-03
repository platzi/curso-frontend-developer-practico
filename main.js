const menuEmail = document.querySelector(".navbar-email")
const menuIcon = document.querySelector(".menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")

const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const cartMenu = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuIcon.addEventListener("click", toggleMobileMenu)
menuCartIcon.addEventListener("click", toggleCartMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    if(!(cartMenu.classList.contains("inactive"))){
        cartMenu.classList.toggle("inactive")}
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    if(!(cartMenu.classList.contains("inactive"))){
        cartMenu.classList.toggle("inactive")}
}

function toggleCartMenu(){
    cartMenu.classList.toggle("inactive")
    if(!(desktopMenu.classList.contains("inactive"))){
        desktopMenu.classList.toggle("inactive")}
    if(!(mobileMenu.classList.contains("inactive"))){
        mobileMenu.classList.toggle("inactive")}
}
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu")
const menuHamIcon = document.querySelector(".menu")

const menuCarIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCar = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleMenu); 
menuHamIcon.addEventListener("click", toggleMenuMobile)
menuCarIcon.addEventListener("click", toggleShoppingCar)

function toggleMenu(){

    const isShoppingCarClose = shoppingCar.classList.contains("inactive"); 

    if(!isShoppingCarClose){
        desktopMenu.classList.remove("inactive")
        shoppingCar.classList.add("inactive")
    } else{
        desktopMenu.classList.toggle("inactive")
    }
}

function toggleMenuMobile(){

    const isShoppingCarClose = shoppingCar.classList.contains("inactive"); 

    if(!isShoppingCarClose){
        mobileMenu.classList.remove("inactive")
        shoppingCar.classList.add("inactive")
    } else{
        mobileMenu.classList.toggle("inactive")
    }
}

function toggleShoppingCar(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive"); 

    if(!isMobileMenuClose){
        mobileMenu.classList.add("inactive")
        shoppingCar.classList.remove("inactive")
    } else{
        shoppingCar.classList.toggle("inactive")
    }
}
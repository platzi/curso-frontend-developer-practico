const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

const menuHambugerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const asideCart = document.querySelector(".product-detail")

menuEmail.addEventListener(
    "click",
    //toggle desktop menu
    ()=>{
        desktopMenu.classList.toggle("inactive")
        asideCart.classList.add("inactive")
    }
)


menuHambugerIcon.addEventListener(
    "click",
     //toggle mobile menu
    ()=>{
        mobileMenu.classList.toggle("inactive")
        asideCart.classList.add("inactive")
    }
)

menuCartIcon.addEventListener(
    "click",
    //toggle aside cart
    ()=>{
        asideCart.classList.toggle("inactive")
        desktopMenu.classList.add("inactive")
        mobileMenu.classList.add("inactive")
    }
)
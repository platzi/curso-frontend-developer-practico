const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHambugerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


menuEmail.addEventListener(
    "click",
    //toggle desktop menu
    ()=>{
        desktopMenu.classList.toggle("inactive")
    }
)


menuHambugerIcon.addEventListener(
    "click",
     //toggle mobile menu
    ()=>{
        mobileMenu.classList.toggle("inactive")
    }
)
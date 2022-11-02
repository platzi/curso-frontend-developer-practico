const menuEmail= document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const HamMenuIcon= document.querySelector(".menu")
const carMenuIcon= document.querySelector(".navbar-shopping-cart")
const mobileMenu= document.querySelector(".mobile-menu")
const aside= document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
HamMenuIcon.addEventListener("pointerenter", toggleMobileMenu)
carMenuIcon.addEventListener("pointerenter", toggleAside)

function toggleDesktopMenu(){
    const isAsideClosed= aside.classList.contains("inactive")  

     if(!isAsideClosed){
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
     const isAsideClosed= aside.classList.contains("inactive")  

     if(!isAsideClosed){
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleAside(){
    const isMobileMenuClosed= mobileMenu.classList.contains("inactive")  

     if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
}
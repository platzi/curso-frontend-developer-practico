const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIco = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIco.addEventListener("click", toggleMobilMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive")
    
    if(!isAsideClosed){
        aside.classList.add("inactive")
        }
    desktopMenu.classList.toggle("inactive")
}
    
 function toggleMobilMenu(){  
    const isAsideClosed = aside.classList.contains("inactive")

    if(!isAsideClosed){
    aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}
    
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
     
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
    
}


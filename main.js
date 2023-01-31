// alert("Chacking that JS is working")

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartMenu = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
shoppingCartMenu.addEventListener("click", toggleShoppingCartAside)

function toggleDesktopMenu() {
    // Creating constants in order to evaluate if the tags are closed
    const isAsideClosed = aside.classList.contains("inactive")
    
    // If the tag "is not" (!) closed... then its open, so please close it
    if(!isAsideClosed) {
        aside.classList.add("inactive")
    }
    
    // ".toggle" allows me to remove or set the class "inactive"
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() { 
    const isAsideClosed = aside.classList.contains("inactive")
    
    if(!isAsideClosed) {
        aside.classList.add("inactive")
    }
    
    mobileMenu.classList.toggle("inactive")
}

function toggleShoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    
    aside.classList.toggle("inactive");
}
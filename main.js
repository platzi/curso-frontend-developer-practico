const menuEmail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")
const menuHamIcon = document.querySelector (".menu")
const menuCarIcon = document.querySelector (".navbar-shopping-cart")
const mobileMenu = document.querySelector (".mobile-menu")
const aside = document.querySelector (".product-detail")

menuEmail.addEventListener ("click", toggleDesktopMenu)
menuHamIcon.addEventListener ("click", toggleMobileMenu)
menuCarIcon.addEventListener ("click", toggleCarAside)

function toggleDesktopMenu () {
    const isCarClosed = aside.classList.contains ("inactive")

    if  (!isCarClosed) {
        aside.classList.add ("inactive")
    } 
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu () {
    const isCarClosed = aside.classList.contains ("inactive")
    

    if  (!isCarClosed) {
        aside.classList.add ("inactive")
    } 

   
    mobileMenu.classList.toggle("inactive")
}

function toggleCarAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains ("inactive")

    if  (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add ("inactive")
        desktopMenu.classList.add ("inactive")
    }
    
   

    aside.classList.toggle("inactive")
}
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menu = document.querySelector(".menu")
const shoppingCart = document.querySelector("#carrito")
const asideOrders = document.querySelector(".product-detail")
menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu(){
    const isAsideClose = asideOrders.classList.contains("inactive")

    if (!isAsideClose){
      asideOrders.classList.add("inactive")
      }
    desktopMenu.classList.toggle("inactive")
    
}

menu.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu(){
    const isAsideClose = asideOrders.classList.contains("inactive")
    
    if (!isAsideClose){
      asideOrders.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

shoppingCart.addEventListener("click", toggleAsideOrders)

function toggleAsideOrders(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }

    asideOrders.classList.toggle("inactive")
    

}
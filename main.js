const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavOptions = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartItems = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileNavOptions.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", togglecartItems);

function toggleDesktopMenu(){
    const isCartItemsClosed = cartItems.classList.contains("inactive");
    if(!isCartItemsClosed){
        cartItems.classList.add("inactive");
    }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isCartItemsClosed = cartItems.classList.contains("inactive");
    if(!isCartItemsClosed){
        cartItems.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function togglecartItems(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    cartItems.classList.toggle("inactive");
}


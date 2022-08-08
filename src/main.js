// MENU EMAIL
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
menuEmail.addEventListener("click", toggleDesktopMenu);


// MOBILE MENU BAR
const menuBurguerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
menuBurguerIcon.addEventListener("click", toggleMobileMenu);


// ASIDE CART MENU
const menuCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")
menuCart.addEventListener("click",  toggleAsideCart);


// MENU BAR
function toggleDesktopMenu(){
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

// MOBILE MENU
function toggleMobileMenu(){
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

// ASIDE CART
function toggleAsideCart(){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
}
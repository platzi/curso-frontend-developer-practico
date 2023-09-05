const menuEmail = document.querySelector(".navbar-email");
const cartIcon = document.querySelector(".navbar-shopping-cart")
const asideMenu = document.querySelector(".product-detail")
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleAsideMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    asideMenu.classList.add("inactive")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
    asideMenu.classList.add("inactive") 
}

function toggleAsideMenu() {
    asideMenu.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}

console.log("FUNCIONOOOO!!!")
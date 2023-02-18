const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const navCarrito = document.querySelector(".product-detail")
const cartMenu = document.querySelector(".navbar-shopping-cart")
console.log(desktopMenu.className);

navEmail.addEventListener("click", toggleDesktopMenu) 
menuHamIcon.addEventListener("click", toggleMobileMenu) 
cartMenu.addEventListener("click", toggleCartMenu) 

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    // para q el otro se cierre
    if (navCarrito.className === "product-detail") {
        navCarrito.classList.toggle("inactive")
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}

function toggleCartMenu() {
    navCarrito.classList.toggle("inactive")
    // para q el otro se cierre
    if (desktopMenu.className === "desktop-menu") {
        desktopMenu.classList.toggle("inactive")
    }
}


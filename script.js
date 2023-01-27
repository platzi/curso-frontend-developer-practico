

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuIcon = document.querySelector(".menu")

const email = document.querySelector(".navbar-email")

const shopButton = document.querySelector(".navbar-shopping-cart")
const shopMenu = document.querySelector(".product-detail")

email.addEventListener("click", toggleDesktopMenu)
menuIcon.addEventListener("click",toggleMobileMenu)
shopButton.addEventListener("click", toggleShopMenu)

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(event) {
    shopMenu.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}

function toggleShopMenu(event){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    shopMenu.classList.toggle("inactive")
}
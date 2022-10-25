const menuEmail = document.querySelector(".navbar-email")
const bugerMenu = document.querySelector(".menu")
const desktopMenu = document.getElementById("desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
bugerMenu.addEventListener("click", toggleMobileMenu)
menuCartIcon.addEventListener("click", toggleCart)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive")
}

function toggleCart() {
  aside.classList.toggle("inactive")
}
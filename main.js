const menuEmail =  document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".burguer-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".sh-cart-img")
const asideShCart = document.querySelector(".sh-cart-detail")

menuEmail.addEventListener("click", toggleMenu)
burguerMenu.addEventListener("click", toggleMenu)
shoppingCart.addEventListener("click", toggleMenu)

function toggleMenu (event) {
  if (event.target.className === "navbar-email" ) {
    asideShCart.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
  } else if (event.target.className === "burguer-menu") {
    asideShCart.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
  } else if (event.target.className === "sh-cart-img" ) {
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    asideShCart.classList.toggle("inactive")
  }
}
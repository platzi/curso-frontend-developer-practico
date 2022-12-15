const menuEmail =  document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

const burguerMenu = document.querySelector(".burguer-menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleMenu)
burguerMenu.addEventListener("click", toggleMenu)

function toggleMenu (event) {
  if (event.target.className == "navbar-email" ) {
    desktopMenu.classList.toggle("inactive")
  } else {
    mobileMenu.classList.toggle("inactive")
  }
}
const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {
  const isAaideClosed = aside.classList.contains("inactive")
  if (!isAaideClosed) {
    aside.classList.add("inactive")
  }

  // Funcion para que mi cuenta aparezca en Destokp
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  const isAaideClosed = aside.classList.contains("inactive")
  if (!isAaideClosed) {
    // Si el aside esta abierto lo cerramos para abrir el mobileMenu
    aside.classList.add("inactive")
  }
  // Funcion para que mi cuenta aparezca en Mobile
  mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside() {
  const ismobileMenuClosed = mobileMenu.classList.contains("inactive")

  if (!ismobileMenuClosed) {
    // Si el mobileMenu esta Abierto lo cerramos para abrir el aside
    mobileMenu.classList.add("inactive")
  }
  aside.classList.toggle("inactive")
}

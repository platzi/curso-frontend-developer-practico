const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menu = document.querySelector(".menu")

menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

menu.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu(){
  mobileMenu.classList.toggle("inactive")
}
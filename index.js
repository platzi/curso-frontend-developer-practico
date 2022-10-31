const menuEmail= document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const HamMenuIcon= document.querySelector(".menu")
const mobileMenu= document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)
HamMenuIcon.addEventListener("pointerenter", toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
}
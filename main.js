const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIco = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIco.addEventListener("click", toggleMobilMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}

function toggleMobilMenu(){
    mobileMenu.classList.toggle("inactive")
}

const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const burguerIcon = document.querySelector(".menu")

menuEmail.addEventListener("click", toggleDesktopMenu)
burguerIcon.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("ver")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("ver")
    console.log(mobileMenu)
}
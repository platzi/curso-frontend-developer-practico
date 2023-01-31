// alert("Verificando que JS fxne")

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu() {
    // Con ".toggle" quito o pongo clase "inactive" dependiendo de si la tiene o no
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    // Con ".toggle" quito o pongo clase "inactive" dependiendo de si la tiene o no
    mobileMenu.classList.toggle("inactive")
}
const mailMenu = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

const menuHamb = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

mailMenu.addEventListener("click",toggleDesktopMenu)
menuHamb.addEventListener("click",toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
}
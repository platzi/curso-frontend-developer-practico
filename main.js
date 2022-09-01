const navBarEmail = document.querySelector(".navbar-email")
const desktopMenu= document.querySelector(".desktop-menu")
const menuHamIcon=document.querySelector(".menu")
const mobileMenu=document.querySelector(".mobile-menu")

navBarEmail.addEventListener("click",togleMenu)
menuHamIcon.addEventListener("click",togleMobileMenu)

function togleMenu() {
    desktopMenu.classList.toggle("inactive")
}

function togleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}
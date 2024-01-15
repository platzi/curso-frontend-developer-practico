const nav_bar = document.querySelector(".navbar-email")
const nav_email = document.querySelector(".desktop-menu")
const menu = document.querySelector(".menu")
const mobileMenu= document.querySelector(".mobile-menu")

function quitarInactive(){
nav_email.classList.toggle ("inactive")
}

function quitarInactive2(){
    mobileMenu.classList.toggle ("inactive")
    }

nav_bar.addEventListener("click", quitarInactive)
menu.addEventListener("click", quitarInactive2)
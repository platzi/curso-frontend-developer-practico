
const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")

const MenuBurger = document.querySelector(".menuBurger")
const mobileMenu = document.querySelector(".mobile-menu")


menuEmail.addEventListener('click',toogleDesktopMenu)

function toogleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive')
}



MenuBurger.addEventListener("click",toogleMobile)

function toogleMobile(){
    mobileMenu.classList.toggle("inactive")
}

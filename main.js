const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerIcon = document.querySelector("img.menu")
const burgerMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toogleDesktopMenu)
burgerIcon.addEventListener("click", toogleBurgerMenu)


function toogleDesktopMenu () {
    desktopMenu.classList.toggle("inactive")
}

function toogleBurgerMenu () {
    console.log("Click")
    burgerMenu.classList.toggle("inactive")
}
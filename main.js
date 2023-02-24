const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuCel = document.querySelector(".menu")
const selectorMobile = document.querySelector(".mobile-menu")



menuEmail.addEventListener("click", toggleDesktopMenu)
menuCel.addEventListener("click", toggleMobileMenu)


function toggleDesktopMenu(){

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    selectorMobile.classList.toggle("inactive")
}

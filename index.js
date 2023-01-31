const menuEmail = document.querySelector(".navbar-email")

const hiddenMenu = document.querySelector(".desktop-menu")


menuEmail.addEventListener("click", toggleDesktopMenu)


function toggleDesktopMenu () {
    hiddenMenu.classList.toggle("inactive")
}


// Toggle menu mobile only when mobile and when burguer Menu is clicked

const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

menuHamburger.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu() {
    // console.log(menuMobile)
    menuMobile.classList.toggle("inactive")
}
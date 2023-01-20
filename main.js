const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu")
const menuIcon = document.querySelector(".menu")

menuEmail.addEventListener("click", toggleMenu); 
menuIcon.addEventListener("click", toggleMenuMobile)

function toggleMenu(){

    desktopMenu.classList.toggle("inactive")
}

function toggleMenuMobile(){

    mobileMenu.classList.toggle("inactive")
}
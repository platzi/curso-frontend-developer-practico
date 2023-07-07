const navEmail= document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");
const menuHamIcon= document.querySelector(".menu")
const mobileMenu= document.querySelector(".mobile-menu")

navEmail.addEventListener('click', toggleDescktopMenu)
menuHamIcon.addEventListener('click', toggleMovileMenu)

function toggleDescktopMenu(){
    desktopMenu.classList.toggle("inactive")
}
function toggleMovileMenu(){
    mobileMenu.classList.toggle("inactive")
}
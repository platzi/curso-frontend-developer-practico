const menuEmail = document.querySelector(".navbar-email");
const destopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDestopMenu);
menuHamIcon.addEventListener("click", togglemobileMenu);

function toggleDestopMenu () {
    destopMenu.classList.toggle("inactive")

}
function togglemobileMenu () {
    mobileMenu.classList.toggle("inactive")

}

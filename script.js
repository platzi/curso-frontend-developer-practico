const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDekstopMenu);
burgerMenu.addEventListener("click", togglemobileMenu);

function toggleDekstopMenu(){
desktopMenu.classList.toggle("inactive") // Togle hace aparecer y desaparecer.
}

function togglemobileMenu(){
    mobileMenu.classList.toggle("inactive") 
}
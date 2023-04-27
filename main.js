const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle("inactive"); //Pone y quita la clase
}

const hamburguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

hamburguerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}
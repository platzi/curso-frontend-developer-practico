const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carMenu = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);
carMenu.addEventListener("click", toggleCarMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle("inactive"); //Pone y quita la clase
    mobileMenu.classList.add("inactive");
    asideCar.classList.add("inactive");

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    asideCar.classList.add("inactive");
}

function toggleCarMenu(){
    asideCar.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");

}
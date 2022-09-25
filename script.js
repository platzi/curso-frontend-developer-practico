const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDekstopMenu);
burgerMenu.addEventListener("click", togglemobileMenu);
menuCarritoIcon.addEventListener("click", togglecarritoAside)

function toggleDekstopMenu(){
desktopMenu.classList.toggle("inactive") // Togle hace aparecer y desaparecer.
}

function togglemobileMenu(){
    mobileMenu.classList.toggle("inactive") 
}

function togglecarritoAside(){
    aside.classList.toggle("inactive") 

}
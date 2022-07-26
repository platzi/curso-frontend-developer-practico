const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const carritoMenu = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", showDesktopMenu);    
menuHamIcon.addEventListener("click", showMobileMenu);
carritoIcon.addEventListener("click", showMyOrder);

function showDesktopMenu(){   
    carritoMenu.classList.add("inactive");
    desktopMenu.classList.toggle("inactive"); // Cada que le den click se quita o pone la clase inactive de css

}

function showMobileMenu(){ 
    carritoMenu.classList.add("inactive");
    mobileMenu.classList.toggle("inactive"); 

}

function showMyOrder(){ 
    mobileMenu.classList.add("inactive"); 
    carritoMenu.classList.toggle("inactive"); 
}


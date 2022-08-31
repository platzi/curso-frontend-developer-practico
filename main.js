const NavEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

const BurgerStyleMenuBar = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");

const CartMenu = document.querySelector(".navbar-shopping-cart")
const Asaid = document.querySelector(".product-detail");


NavEmail.addEventListener("click" , exchangeDesktopMenu);
BurgerStyleMenuBar.addEventListener("click" , exchangeMobileMenu);
CartMenu.addEventListener("click" , exchangeCartAside);


function exchangeDesktopMenu (){
    DesktopMenu.classList.toggle("inactive");
}

function exchangeMobileMenu (){
    MobileMenu.classList.toggle("inactive");
}

function exchangeCartAside (){
    Asaid.classList.toggle("inactive");
}
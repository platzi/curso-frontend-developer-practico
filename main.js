const NavEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const BurgerStyleMenuBar = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");


NavEmail.addEventListener("click" , exchangeDesktopMenu);
BurgerStyleMenuBar.addEventListener("click" , exchangeMobileMenu);


function exchangeDesktopMenu (){
    DesktopMenu.classList.toggle("inactive");
}

function exchangeMobileMenu (){
    MobileMenu.classList.toggle("inactive");
}
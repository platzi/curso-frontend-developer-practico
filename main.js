const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", function(){toggleMenu(desktopMenu)});

menuHamIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});




function toggleMenu(menuInactive){

    menuInactive.classList.toggle("inactive");

}
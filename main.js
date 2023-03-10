let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu"); 
navbarEmail.addEventListener("click", mostrarMenu);

let mobileMenu = document.querySelector(".mobile-menu");
let imgMobileMenu = document.querySelector(".menu");
imgMobileMenu.addEventListener("click", mostrarMenuMobile);


function mostrarMenu(){
    desktopMenu.classList.toggle("inactive");
}

function mostrarMenuMobile(){
    mobileMenu.classList.toggle("inactive");
}
const clickEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const clickMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


clickEmail.addEventListener("click", mostrarMenu);

function mostrarMenu(){
    desktopMenu.classList.toggle("inactive");
}



clickMenu.addEventListener("click", mostrarMenuMobile);

function mostrarMenuMobile(){
    mobileMenu.classList.toggle("inactive");
}

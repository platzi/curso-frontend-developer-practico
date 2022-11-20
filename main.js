const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

mail.addEventListener("click", toggleDesktoMenu);

function toggleDesktoMenu(){
    desktopMenu.classList.toggle("inactive");
}

const iconBurger = document.querySelector(".menu");
const menuBurger = document.querySelector(".mobile-menu");

iconBurger.addEventListener("click", ocultar);

function ocultar(){
    menuBurger.classList.toggle("inactive");
}
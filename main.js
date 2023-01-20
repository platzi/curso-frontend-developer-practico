const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleMenu); 

function toggleMenu(){

    desktopMenu.classList.toggle("inactive")
}
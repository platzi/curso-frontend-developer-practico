const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDekstopMenu);

function toggleDekstopMenu(){
desktopMenu.classList.toggle("inactive") // Togle hace aparecer y desaparecer.
}
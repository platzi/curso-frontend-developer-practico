let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu"); 
navbarEmail.addEventListener("click", mostrarMenu);

function mostrarMenu(){
    desktopMenu.classList.toggle("inactive");
}
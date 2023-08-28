const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu); //toggle es como intercambiar

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}
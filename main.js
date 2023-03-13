const navMenuEmali = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

navMenuEmali.addEventListener("click" , toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
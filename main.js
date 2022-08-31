const manuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
manuEmail.addEventListener("click", toogleDesktopMenu);

function toogleDesktopMenu(){
  desktopMenu.classList.toggle("inactive");
}
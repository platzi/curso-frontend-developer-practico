const menuEmail = document.querySelector(".navbar-email");
const destokpMenu =document.querySelector(".desktop-menu")


menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
   destokpMenu.classList.toggle("inactive");
}
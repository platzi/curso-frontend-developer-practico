const menuEmail = document.querySelector(".navbar-email");
const deskopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function  toggleDesktopMenu(){
    deskopMenu.classList.toggle("inactive");
}
const NavEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");


NavEmail.addEventListener("click" , exchangeDesktopMenu);

function exchangeDesktopMenu (){
    DesktopMenu.classList.toggle("inactive");
    console.log("Click");
}
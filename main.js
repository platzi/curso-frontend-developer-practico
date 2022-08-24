const menuMail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
menuMail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle("inactive");
}


console.log("Salud ")
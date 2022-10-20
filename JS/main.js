const emailNavbar = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");

emailNavbar.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    menuDesktop.classList.toggle("inactive");
}

console.log("Hola Mundo")
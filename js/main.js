const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
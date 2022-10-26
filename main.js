const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");


menuEmail.addEventListener("click", showDesktopMenu);

function showDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}
console.log("Desktop")
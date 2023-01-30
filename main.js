const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

// Aparecer desktop menu, presionar email
function toggleDesktopMenu() {
    console.log("Click");
    desktopMenu.classList.toggle("inactive"); //if inactive is set remove it, otherwise add it
}

console.log("JS funcionando");
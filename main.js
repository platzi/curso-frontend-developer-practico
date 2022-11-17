const menuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);

// function toggleDesktopMenu() {
//     DesktopMenu.classList.remove("inactive");  //mi forma para que aparezca el menú
// }

function toggleDesktopMenu() {
    DesktopMenu.classList.toggle("inactive");  //no sabia que existia toggle
}

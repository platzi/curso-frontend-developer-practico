const menuEmail = document.querySelector(".navbar-email");
const destopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDestopMenu)

function toggleDestopMenu () {
    destopMenu.classList.toggle("inactive")

}

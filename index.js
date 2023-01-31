const menuEmail = document.querySelector(".navbar-email")

const hiddenMenu = document.querySelector(".desktop-menu")


menuEmail.addEventListener("click", toggleMenu)


function toggleMenu () {

    hiddenMenu.classList.toggle("inactive")
}

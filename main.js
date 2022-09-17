const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", desplegarMenu)

function desplegarMenu(){
    desktopMenu.classList.toggle("inactive");
}


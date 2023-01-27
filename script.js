

const desktopMenu = document.querySelector(".desktop-menu");
const email = document.querySelector(".navbar-email")


email.addEventListener("click", toggleDesktopMenu)



function toggleDesktopMenu(event){
    desktopMenu.classList.toggle("inactive")
}
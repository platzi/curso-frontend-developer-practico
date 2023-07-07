const navEmail= document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu")

navEmail.addEventListener('click', toggleDescktopMenu)

function toggleDescktopMenu(){
    desktopMenu.classList.toggle("inactive")
}
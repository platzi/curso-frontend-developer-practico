const navEmail = document.querySelector(".navbar-email") 
const desktopMenu = document.querySelector(".desktop-menu")

navEmail.addEventListener("click", toggleMenu)

function toggleMenu(e) {
    e.preventDefault()  
    console.log(e);
    desktopMenu.classList.toggle("inactive")
}
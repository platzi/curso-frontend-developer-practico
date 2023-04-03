
const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener('click',toogleDesktopMenu)

function toogleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive')
}



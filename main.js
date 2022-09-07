const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")


menuEmail.addEventListener(
    "click",
    //toggle desktop menu
    ()=>{
        desktopMenu.classList.toggle("inactive")
    }
)
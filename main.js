let menuEmail = document.querySelector(".navbar-email")
let descktopMenu = document.querySelector(".desktop-menu");
menuEmail.addEventListener("click" , toogleDesktopMenu)

function toogleDesktopMenu(){
    /* el toogle permite quitar o poner el elemento, si esta lo quitara. y si no esta lo colocara */
    descktopMenu.classList.toggle("inactive")
}
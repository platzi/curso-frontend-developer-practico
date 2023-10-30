const menuEmail=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector(".desktop-menu")

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){
    console.log("Entra a funcion")
    desktopMenu.classList.toggle('inactive')
}
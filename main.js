let email = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')
let burguerMenu = document.querySelector('.burguerMenu')
let mobileMenu = document.querySelector('.mobile-menu')



function quitarPonerClaseParaDesktop() {
    desktopMenu.classList.toggle('inactive')
}

function quitarPonerClaseParaMobile(){
    mobileMenu.classList.toggle('inactive')
}
burguerMenu.addEventListener('click', quitarPonerClaseParaMobile)
email.addEventListener('click', quitarPonerClaseParaDesktop)





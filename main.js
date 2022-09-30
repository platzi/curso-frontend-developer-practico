const desktopMenu = document.querySelector('.desktop-menu')
const menuEmail = document.querySelector('.navbar-email')
const imgMenumovile = document.querySelector('.menu')
const movileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)
imgMenumovile.addEventListener('click', toggleDesktopMenumovile)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}   

function toggleDesktopMenumovile () {
    movileMenu.classList.toggle('inactive')
    
}   


const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const mobileMenu  = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleBurguerMenu)

function toggleDesktopMenu() {
    console.log('es un click')
    desktopMenu.classList.toggle('inactive')
    
}

function toggleBurguerMenu() {
   
    mobileMenu.classList.toggle('inactive')
    
}
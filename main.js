const menuEmail = document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu= document.querySelector('.mobile-menu')
const menuHamb = document.querySelector('.menu')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamb.addEventListener('click', toggleHambMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleHambMenu(){
    mobileMenu.classList.toggle('inactive')
}


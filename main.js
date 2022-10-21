const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleBurgerMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleBurgerMenu(){
    mobileMenu.classList.toggle('inactive')
}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const hamburMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDeskotMenu)
hamburMenu.addEventListener('click', toggleMobileMenu)

function toggleDeskotMenu(event) {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(event) {
   mobileMenu.classList.toggle('inactive')
}
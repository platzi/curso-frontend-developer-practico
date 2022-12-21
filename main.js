let navEmail= document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){

   desktopMenu.classList.toggle('inactive')
}
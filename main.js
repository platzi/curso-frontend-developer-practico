const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', function() {
  desktopMenu.classList.toggle('inactive')
})

menuHamIcon.addEventListener('click', function() {
  mobileMenu.classList.toggle('inactive')
})
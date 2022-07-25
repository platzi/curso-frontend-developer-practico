const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const BurguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


navEmail.addEventListener('click',() => {
  desktopMenu.classList.toggle('inactive')
})

BurguerMenu.addEventListener('click',() => {
  mobileMenu.classList.toggle('inactive')
})
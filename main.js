const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const BurguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartMenu = document.querySelector('.navbar-shopping-cart')
const cart = document.querySelector('.product-detail') 

navEmail.addEventListener('click',() => {
  !cartMenu.classList.contains('inactive') && cart.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
})

BurguerMenu.addEventListener('click',() => {
  !cartMenu.classList.contains('inactive') && cart.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
})

cartMenu.addEventListener('click',() => {
  !desktopMenu.classList.contains('inactive') && desktopMenu.classList.add('inactive')
  !mobileMenu.classList.contains('inactive') && mobileMenu.classList.add('inactive')
  cart.classList.toggle('inactive')
})
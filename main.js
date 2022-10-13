const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const cart = document.querySelector('.product-detail')


email.addEventListener('click', toggleEmail)
mobileIcon.addEventListener('click', toggleMenu)
cartIcon.addEventListener('click',toggleCart)

function toggleEmail(){
  if(!cart.classList.contains('inactive')){
    cart.classList.toggle('inactive')
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMenu(){
  if(!cart.classList.contains('inactive')){
    cart.classList.toggle('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}
function toggleCart(){
  if(!mobileMenu.classList.contains('inactive')){mobileMenu.classList.toggle('inactive')}
  if(!desktopMenu.classList.contains('inactive')){desktopMenu.classList.toggle('inactive')}
  cart.classList.toggle('inactive');
}
const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuIconCar = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

navEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')
  isCarClose()
})

burgerMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('inactive')
  isCarClose()
})

menuIconCar.addEventListener('click', () => {
  aside.classList.toggle('inactive')
  const isBurgerMenuClose = burgerMenuIcon.classList.contains('inactive')
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
  
  if(!isBurgerMenuClose || !isDesktopMenuClose) {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
  }
})

const isCarClose = () => {
  const isAsideClose = aside.classList.contains('inactive')
  if(!isAsideClose) {
    aside.classList.add('inactive')
  }
}
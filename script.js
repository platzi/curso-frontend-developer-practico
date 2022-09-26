//fusion desktop menu and navbar
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu () {
  //MY SOLUTION BUT

  // if (desktopMenu.classList.contains('inactive')){
  //   desktopMenu.classList.remove('inactive')
  // }else{
  //   desktopMenu.classList.add('inactive')
  // }

  //THERE IS "classList.toggle('')" wich toggle the class on every click
  //SO
  const isAsideCartOpen = !asideCart.classList.contains('inactive')

  if (isAsideCartOpen){
    asideCart.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}

//fusion mobile menu 
const burguerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.classList.remove('active')

burguerMenuIcon.addEventListener ('click', toggleMobileMenu)

function toggleMobileMenu() {
  const isAsideCartOpen = !asideCart.classList.contains('inactive')

  if (isAsideCartOpen){
    asideCart.classList.add('inactive')
  }

  mobileMenu.classList.toggle('active')
}

//fusion shopping cart
const cartMenuIcon = document.querySelector('.navbar-shopping-cart')
const asideCart = document.querySelector('.product-detail')

cartMenuIcon.addEventListener ('click', toggleCartMenu)

function toggleCartMenu() {
  const isMobileMenuOpen = mobileMenu.classList.contains('active')

  if (isMobileMenuOpen){
    mobileMenu.classList.remove('active')
  }
  asideCart.classList.toggle('inactive')

  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

  if (isDesktopMenuOpen){
    desktopMenu.classList.add('inactive')
  }
}
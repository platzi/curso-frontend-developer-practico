const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', function() {
  const isAsideClosed = aside.classList.contains('inactive');
  
  if(!isAsideClosed) {
    aside.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
})

menuHamIcon.addEventListener('click', function() {
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed) {
    aside.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
})

menuCarritoIcon.addEventListener('click', function() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  // Do it for me

  if(!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }
  

  aside.classList.toggle('inactive')

})
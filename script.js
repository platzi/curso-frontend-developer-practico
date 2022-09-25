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
  desktopMenu.classList.toggle('inactive')
}

//fusion mobile menu 

const burguerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.classList.remove('active')

burguerMenuIcon.addEventListener ('click', toggleMobileMenu)

function toggleMobileMenu() {
  mobileMenu.classList.toggle('active')
}
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu')
const mobileMenuButton = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuButton.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu () {
  menuDesktop.classList.toggle('inactive');
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive')
}
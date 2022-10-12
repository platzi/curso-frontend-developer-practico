const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

email.addEventListener('click', toggle)
mobileIcon.addEventListener('click', toggle2)

function toggle(){
  desktopMenu.classList.toggle('inactive');
}
function toggle2(){
  mobileMenu.classList.toggle('inactive');
}
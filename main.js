const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
  desktopmenu.classList.toggle('inactive')
  console.log('click')
}
console.log('muy bien')
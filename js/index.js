const menuEnable = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEnable.addEventListener('click',()=>{
  desktopMenu.classList.toggle('inactive');
})
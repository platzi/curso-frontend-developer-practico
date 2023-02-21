const menuEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggledesktopMenu);

function toggledesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  console.log('click')
  
}
console.log('funciona');
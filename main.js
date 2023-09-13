const menuemail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuemail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
  console.log('click')
  desktopMenu.classList.toggle('inactive')
}
const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');

menuEmail.addEventListener('click' , togleDestokMenu);

function togleDestokMenu(){
   desktopMenu.classList.toggle('inactive');
}
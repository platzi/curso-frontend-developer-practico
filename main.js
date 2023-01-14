const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');




menuEmail.addEventListener('click' , togleDestokMenu);
menuHamIcon.addEventListener('click' , togleMobileMenu);



function togleDestokMenu(){
   desktopMenu.classList.toggle('inactive');
}
function togleMobileMenu(){
   mobileMenu.classList.toggle('inactive');

}
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menumobile= document.querySelector('.menu');
const showmenumobile = document.querySelector('.mobile-menu');
const navEmailMenu = document.querySelector('.email');
const carproduct = document.querySelector('.product-detail')
const logocarproduct = document.querySelector('.navbar-shopping-cart')
// abrir opciones con el correo desde el menu
navEmailMenu.addEventListener('click', toggleDesktopMenu);
//abrir opciones desde el correo desde afuera
navEmail.addEventListener('click',toggleDesktopMenu);
// abrir las opcioens del menu
menumobile.addEventListener('click',toogleshowmenumobile);

//mostrar las compras desde el icono de carrito
logocarproduct.addEventListener('click',toogleshowcarproduct)
function toggleDesktopMenu(){
 desktopMenu.classList.toggle('inactive');
 carproduct.classList.add('inactive');
}
function toogleshowmenumobile(){
showmenumobile.classList.toggle('inactive');
if (carproduct.classList.contains('inactive')!=true){
carproduct.classList.toggle('inactive');
}
}
function toogleshowcarproduct(){
carproduct.classList.toggle('inactive');
desktopMenu.classList.add('inactive');
 if(showmenumobile.classList.contains('inactive')!=true){
    showmenumobile.classList.toggle('inactive');
 }
}

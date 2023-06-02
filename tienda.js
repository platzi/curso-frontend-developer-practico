const correo = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const btnburgue = document.querySelector('.menu')
const mobilMenu = document.querySelector('.mobile-menu ')
const ventana = document.querySelector('.product-detail')
const carrito = document.querySelector('.carrito')

// configuracion del correo

correo.addEventListener('click',aparecer)

function aparecer(){
    desktopMenu.classList.toggle('inactive');
}

// este es el menu mobil 

btnburgue.addEventListener('click',menuMobil)

function menuMobil(){
 const ventanaOpen= ventana.classList.contains('inactive')
  

   if(!ventanaOpen ){
    ventana.classList.add('inactive')
    }
    mobilMenu.classList.toggle('inactive');
}
// esta es la ventana del carrito 
carrito.addEventListener('click',ventanaCarrito)

function ventanaCarrito(){
 const mobilMenuOpen= mobilMenu.classList.contains('inactive')
 
if(!mobilMenuOpen ){
 mobilMenu.classList.add('inactive')
 }
 ventana.classList.toggle('inactive');

}
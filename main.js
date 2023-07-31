const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamburguer = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const menucarrito = document.querySelector('.navbar-shopping-cart');
const navegacioncompras = document.querySelector('.product-detail');




menuEmail.addEventListener('click', toggleDesktopMenu);
/*
menuEmail.addEventListener('click', toggleDesktopMenu);: 
Con esta línea, se agrega un evento click al elemento
 menuEmail. Cuando se hace clic en el elemento, 
 se llama a la función toggleDesktopMenu,
  lo que activa el código dentro de ella, 
  mostrando u ocultando el menú en la parte derecha 
  de la barra de navegación.
*/

function toggleDesktopMenu() {
    console.log('Click');
    desktopmenu.classList.toggle('inactive');

/*
Esto permite alternar la clase inactive en el elemento 
desktopmenu. Si el elemento tiene la clase inactive, 
la elimina; si no la tiene, la agrega. Esto se utiliza
 para mostrar u ocultar el menú en la parte derecha de
  la barra de navegación cuando se hace clic en el elemento 
  con la clase navbar-email.
*/    
}
menuhamburguer.addEventListener('click',toggleMobileMenu);

function  toggleMobileMenu(){
    const isNavegacionComprasClosed = navegacioncompras.classList.contains('inactive');
    
    if(!isNavegacionComprasClosed){
        navegacioncompras.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');

}

menucarrito.addEventListener('click', toggleNavegacionCompras);

function toggleNavegacionCompras(){
    const isMobileMenuClosed = mobilemenu.classList.contains('inactive');


    if(!isMobileMenuClosed){
            mobilemenu.classList.add('inactive');
    }
    
    navegacioncompras.classList.toggle('inactive');
    
}
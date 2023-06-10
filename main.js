const menuEmail = document.querySelector('.navbar-email') ; //se crean las variables que provienen de las clases que vamos a trbajar 
const desktopMenu = document.querySelector('.desktop-menu') ;
const menuhamburguer = document.querySelector('.menu') ;
const mobileMenu = document.querySelector('.mobile-menu') ;
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart') ;
const aside = document.querySelector('.product-detail') ;


menuEmail.addEventListener('click', toggleDesktopMenu); // utilizamos el tan amado addevent con click y la funcion que creamos 
menuhamburguer.addEventListener('click', toggleMobilemenu); // utilizamos el tan amado addevent con click y la funcion que creamos 
menuCarritoIcon.addEventListener('click', toggleCarritoAside); // utilizamos el tan amado addevent con click y la funcion que creamos 



function toggleDesktopMenu() {
    const isAsideclose = aside.classList.contains('inactive'); // creamos const para saber si tiene la clase activa o no
    if(!isAsideclose){   // en la funcion prefuntamos si el aside esta abierto o no, si no esta abierto lo cerramos
        aside.classList.add('inactive')
       } 
    desktopMenu.classList.toggle('inactive'); //creamos la funcion que creamos con toggle que añade o quita segun este o no este 
} //inactive es una clase que creamos que basicamente es display: none

function toggleMobilemenu() {
    const isAsideclose = aside.classList.contains('inactive'); // para saber si el aside el estado del aside
    if(!isAsideclose){ // preguntamos si esta abierto 
        aside.classList.add('inactive') // si lo esta lo desactivamos y si no pasamos directamente al otro paso
       } 
    mobileMenu.classList.toggle('inactive');  // y el famoso toggle abre o cierra
} 

function toggleCarritoAside() {
     const isMobileMenuClose = mobileMenu.classList.contains('inactive'); // creamos constatnte
   if(!isMobileMenuClose){  // funcion para preguntar 
    mobileMenu.classList.add('inactive') // desactivamos
   } 
    aside.classList.toggle('inactive');  // y el toggle
} 


/**
 * La Siguiente funcion los que hace es tomar el div que contiene
 * el menu de usuario y al hacer clic sobre el email que esta
 * en el navbar el menua de usuario aparecera abajo
 * originalmente el menu tiene una clase "inactive" que 
 * no lo muestra, cuando se hace clic en el email se llama
 * a la funcion toggleDesktopMenu, que lo que hace es agregar
 * o quitar la clase inactive del div contenedor del menu
 * para mostrar o no el menu
 */
const desktopMenu=document.querySelector('.desktop-menu');
const menuEmail=document.querySelector('.navbar-email');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    if(!aside.classList.contains('inactive')){
        toggleCarritoAside();
    }

    desktopMenu.classList.toggle('inactive');
}

/*El siguiente codigo es marecido al terior, pero lo que
se busca es ocultar y mostrar el menu en mobile
cuando se de clic en el icono que es un menu
en forma de hamburguesa*/
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    if(!aside.classList.contains('inactive')){
        toggleCarritoAside();
    }

    mobileMenu.classList.toggle('inactive');
}

/* Clase13.html agregando el aside de carrito de compras, verificando
que el menu de usuario este cerrado, en caso contrartio cerrarlo
y viceversa
*/
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleCarritoAside(){  

    if(!mobileMenu.classList.contains('inactive')){
        toggleMobileMenu();
    }
    if(!desktopMenu.classList.contains('inactive')){
        toggleDesktopMenu();
    }
    
    aside.classList.toggle('inactive');
}
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
    mobileMenu.classList.toggle('inactive');
}
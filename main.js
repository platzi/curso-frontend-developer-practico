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
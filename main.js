const menuEmail = document.querySelector('.navbar-email'); //Creamos una variable en la cual seleccinamos el elemento 
const desktopMenu = document.querySelector('.desktop-menu'); // Cremamos una variable llamada desktopMenu y le decimos que seleccione a cualquier elemento que tenga la clase desktop-menu  

menuEmail.addEventListener('click', toggleDesktopMenu); //utilizamos su propiedad addEventListener para ejecutar algo cuando le demo click.

//toggleDesktopMenu es el nombre de una función que debemos crear.

function toggleDesktopMenu(){ //acá es donde hacemos que aparezca o desaparezca el pequeño menu.
    desktopMenu.classList.toggle('inactive'); //Ejecuta la función classList.toggle, lo que hace es quitar o poner la clase inactive dependiendo si la tiene o no

}


const menuEmail   = document.querySelector('.navbar-email');       // Seleccionamos elemento de html 
const desktopMenu = document.querySelector('.desktop-menu');       // Seleccionamos elemento de html para desactivar la propiedad del css inactive 
menuEmail.addEventListener('click', toggleDescktopMenu);         //Seleccionamos la propiedad addEventListener para escucha cuando demos un click sobre el elemento

function toggleDescktopMenu(){

     desktopMenu.classList.toggle('inactive');                  //se utiliza en JavaScript para agregar o quitar una clase específica de un elemento del DOM. Si la clase especificada está presente en el elemento, se quitará; de lo contrario, se agregará


}
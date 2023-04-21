const menuEmail = document.querySelector('.navbar-email')

const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

//classList es una propiedad de los elemntos del DOM que representa la lista de clases del elemento. 

//toggle es un método de la propiedad classList de los elementos del DOM, que se utiliza para agregar o eliminar una clase especificada de un elemento.

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
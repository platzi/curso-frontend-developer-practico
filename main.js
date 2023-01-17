
//capturamos el boton que contiene el email
const menuEmail = document.querySelector('.navbar-email');

//Seleccionamos menu que queremos que aparezca y desaparez
const deskTopMenu = document.querySelector('.desktop-menu');


//con click ejecuta la funcion que hace aparece y desa
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    //Quitamos o ponemos la clase inactive al menu
    deskTopMenu.classList.toggle('inactive');
}
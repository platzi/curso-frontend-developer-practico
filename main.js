const menuEmail= document.querySelector('.navbar-email');
const desktopmenu =document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu); //Crear funcion con ese nombre

function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');
}
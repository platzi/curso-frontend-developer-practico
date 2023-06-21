const menuEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Evento que despliega u oculta el sub menu al hacer click en el mail*/ 
menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');   
}
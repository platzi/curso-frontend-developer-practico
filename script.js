console.log('JS Conectado');

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);


function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');    
}

//Comentario para evidenciar que realice cambios al original
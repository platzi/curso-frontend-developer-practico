const menuEmail  = document.querySelector('.navbar-email');
const  contDeskMenu = document.querySelector('.desktop-menu');

console.log("Hola");

menuEmail.addEventListener('click', toggleDeskMenu);

function toggleDeskMenu(){
    console.log('funcion');
contDeskMenu.classList.toggle('inactive');
}
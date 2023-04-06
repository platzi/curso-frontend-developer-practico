const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleMenuDesktop); // "toggle" significa intercambiar  

function toggleMenuDesktop(){
    console.log('Click')
    desktopMenu.classList.toggle('inactive');           // El método ".classList.toggle()" se encarga de poner y quitar la clase ".inactive" (Es como un botón de una lampára)
}

console.log('js funcionando');
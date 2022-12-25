//obtener el elemento html
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//añadir un listener al evento del click
menuEmail.addEventListener('click',toggleDesktopMenu);
//crear la función que cambia la propiedad del elemento
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
console.log('js funcionando');
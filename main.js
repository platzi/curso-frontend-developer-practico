
const menuEmail = document.querySelector('.navbar-email'); /*Seleccion de elementos html por su clase */
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); /*Quita o pone la clase independiente si ya la tiene o no */
console.log('aparece el menu')
}




const menuEmail = document.querySelector('.navbar-email') //al darle click al email aparece el menu desktop
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    /*e agrega o quita la clase inactive de desktop-menu para mostrar o cerrar el menu desktop al dar click en el correo */
}
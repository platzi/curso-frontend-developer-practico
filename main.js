const menuEmail = document.querySelector('.navbar-email'); //al darle click al email aparece el menu desktop
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
menuHamIcon.addEventListener('click',toggleMobileMenu)

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    /*e agrega o quita la clase inactive de desktop-menu para mostrar o cerrar el menu desktop al dar click en el correo */
}

function toggleMobileMenu(){
   mobileMenu.classList.toggle('inactive');
}
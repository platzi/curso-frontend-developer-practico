const navBarLeft= document.querySelector('.navbar-left');
const navBarRight= document.querySelector('.navbar-right');
const navBarDesktopMenu= document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerButton = document.querySelector('.menu');

// Asegurándonos de que existen los elementos antes de intentar agregar el manejador de eventos
if(navBarRight != undefined && navBarDesktopMenu != undefined ){
    console.log('hola');
    const navBarEmail = navBarRight.getElementsByClassName('navbar-email')[0];

    navBarEmail.addEventListener('click', function(){
        // Alternar la clase 'inactive' en desktopMenu
        navBarDesktopMenu.classList.toggle('inactive');
    });
}

hamburgerButton.addEventListener('click', function(){
    mobileMenu.classList.toggle('inactive')
});
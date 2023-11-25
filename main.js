const navBarLeft= document.getElementsByClassName('navbar-left');
const navBarRight= document.getElementsByClassName('navbar-right');
const navBarDesktopMenu= document.getElementsByClassName('desktop-menu');

// Asegurándonos de que existen los elementos antes de intentar agregar el manejador de eventos
if(navBarRight.length > 0 && navBarDesktopMenu.length > 0){
    const navBarEmail = navBarRight[0].getElementsByClassName('navbar-email')[0];
    const desktopMenu = navBarDesktopMenu[0];

    navBarEmail.addEventListener('click', function(){
        // Alternar la clase 'inactive' en desktopMenu
        desktopMenu.classList.toggle('inactive');
    });
}

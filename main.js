const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){

    console.log('click');
    desktopMenu.classList.toggle('inactive')// Esto lo que hace es que la va a intercambiar osea la quitara o pondra.

}
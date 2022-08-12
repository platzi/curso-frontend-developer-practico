const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');



menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){

    console.log('click');
    desktopMenu.classList.toggle('inactive')// Esto lo que hace es que la va a intercambiar osea la quitara o pondra.

}

function toggleMobileMenu()
{

    mobileMenu.classList.toggle('inactive');

}
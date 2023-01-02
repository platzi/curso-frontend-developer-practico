
const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

email.addEventListener('click',toggleMenu);

function toggleMenu(){

   // desktopMenu.classList.add('inactive');
   // desktopMenu.classList.remove('inactive');

    desktopMenu.classList.toggle('inactive') ;


}
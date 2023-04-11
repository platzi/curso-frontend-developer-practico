const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu (){
    //desktopMenu default = inactive 
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    //menu hamburguesa
  mobileMenu.classList.toggle('inactive');
}


  
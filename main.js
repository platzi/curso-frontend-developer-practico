const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu (){
    //desktopMenu default = inactive 
    desktopMenu.classList.toggle('inactive');
}

  
const navBarEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu')

navBarEmail.addEventListener('click', toggleDestopMenu );


function toggleDestopMenu(){
    desktopMenu.classList.toggle('inactive');

}
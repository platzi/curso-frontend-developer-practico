//vamos a agarrar el objeto email para hacer que el menu aparesca.
const menu_email = document.querySelector('.navbar-email');
const menu_desktop = document.querySelector('.desktop-menu');
menu_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    menu_desktop.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */

}
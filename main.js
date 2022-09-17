const menu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menu.addEventListener('click', desplegarMenu);


function desplegarMenu(){
desktopMenu.classList.toggle('inactive');
}









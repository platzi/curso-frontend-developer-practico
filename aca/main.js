const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const movileMenu = document.querySelector('.movile-menu');



menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglebuguerMenu);


function toggle(){
    desktopMenu.classList.toggle('inactive');
}


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
const MenuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

MenuEmail.addEventListener('click', toggleDesktopMenu );


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');    
}
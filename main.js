const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(e){
    e.stopPropagation();
    if (desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.remove('inactive');
        document.addEventListener('click', hideDesktopMenu, false)
    }else{
        desktopMenu.classList.add('inactive');
    }
}
function hideDesktopMenu(e){
    if(e.target != desktopMenu){
        e.stopPropagation();
        desktopMenu.classList.add('inactive');
        document.removeEventListener('click', hideDesktopMenu);
    }

}
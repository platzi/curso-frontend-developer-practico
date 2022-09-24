const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('inactive') == true) {
        desktopMenu.classList.remove('inactive');
        
    } else if (desktopMenu.classList.contains('inactive') == false) {
        desktopMenu.classList.add('inactive')
    }

    //SOLUCION CORTA
    // desktopMenu.classList.toggle('inactive');
}
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('inactive') == true) {
        desktopMenu.classList.remove('inactive');
        
    } else if (desktopMenu.classList.contains('inactive') == false) {
        desktopMenu.classList.add('inactive')
    }

    //SOLUCION CORTA
    // desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
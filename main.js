const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// desplegar desktopMenu al hacer click a navbarEmai
navbarEmail.addEventListener('click', toggleDesktopMenu);
// mobile menu
burgerMenu.addEventListener('click', toggleMobilepMenu);

function toggleDesktopMenu(event){
    // metodo de JuanDC
    desktopMenu.classList.toggle('inactive')
    // metodo de stackOverflow
    // desktopMenu.style = 'display:block'
}

function toggleMobilepMenu(){
    mobileMenu.classList.toggle('inactive')
}
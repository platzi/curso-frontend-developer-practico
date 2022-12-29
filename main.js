const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu)

menuHamburguesa.addEventListener('click', toggleMobileMenu)



function toggleDesktopMenu(){
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('Click');
    mobileMenu.classList.toggle('inactive');
}
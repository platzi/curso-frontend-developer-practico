const navbarEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

navbarEmail.addEventListener('click', toggleDesktopMenu );

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

menu.addEventListener('mouseenter', removeMobileMenu );
mobileMenu.addEventListener('mouseleave', addMobileMenu );
menu.addEventListener('click', addMobileMenu );

function removeMobileMenu(){
    console.log('entro el mouse')
    mobileMenu.classList.remove('inactive');
}
function addMobileMenu(){
    console.log('salio del mouse')
    mobileMenu.classList.add('inactive');
}
function addMobileMenu(){
    console.log('salio del mouse')
    mobileMenu.classList.toggle('inactive');
}
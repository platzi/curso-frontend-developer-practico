const barraEmail=document.querySelector('.navbar-email')
const DesktopMenu=document.querySelector('.desktop-menu')
const mobileMenu=document.querySelector('.mobile-menu')
const menuMobileIcon=document.querySelector('.menu')



barraEmail.addEventListener('click', mostrarBarraEmail);
menuMobileIcon.addEventListener('click', mostrarMobileMenu);

function mostrarBarraEmail(){
    DesktopMenu.classList.toggle('inactive');
}
function mostrarMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

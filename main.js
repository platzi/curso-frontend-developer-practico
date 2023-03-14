const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);


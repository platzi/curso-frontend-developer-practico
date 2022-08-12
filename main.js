const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

mobileHamIcon.addEventListener ('click',toggleMobileMenu);
function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}
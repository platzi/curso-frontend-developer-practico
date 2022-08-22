const menuEmail = document.querySelector('.navbar-email');
const desktopMEnu = document.querySelector('.desktop-menu');
const mobileMenu =document.querySelector('.mobile-menu');
const navMovile = document.querySelector('.menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
navMovile.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMEnu.classList.toggle('inactive');


}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');

}
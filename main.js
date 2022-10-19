const navEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

navEmail.addEventListener('click',toggleDestopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
function toggleDestopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
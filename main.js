const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');



menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDestopMenu(){
    console.log('click')
   desktopMenu.classList.toggle('inactive')
} 

function toggleMobileMenu(){
    console.log('click')
    mobileMenu.classList.toggle('inactive')
} 

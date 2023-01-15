const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click',toggleDekstopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);




function toggleDekstopMenu(){
    desktopmenu.classList.toggle ('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle ('inactive');
}
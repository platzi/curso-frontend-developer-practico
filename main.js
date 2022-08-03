const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.getElementById('prueba');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
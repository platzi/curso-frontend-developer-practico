const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
const navMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', appearDesktopMenu);
navMobileMenu.addEventListener('click', appearMobileMenu);


function appearDesktopMenu(){
    
 deskMenu.classList.toggle('inactive');
}

function appearMobileMenu(){
    
 mobileMenu.classList.toggle('inactive');
}


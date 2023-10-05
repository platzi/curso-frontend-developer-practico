const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
   menuDesktop.classList.toggle('inactive')
}

/* Function for mobile Menu */

menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
   menuMobile.classList.toggle('inactive');
}
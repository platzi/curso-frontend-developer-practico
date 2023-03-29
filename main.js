const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMEnu);
menuIcon.addEventListener('click', toggleMobileMEnu);

function toggleDesktopMEnu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMEnu(){
    mobileMenu.classList.toggle('inactive');
}

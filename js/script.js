const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const iconHambur = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

function toggleMenu(){
    menuDesktop.classList.toggle('inactive');
}
function toggleMobilMenu(){
    menuMobile.classList.toggle('inactive');
}
menuEmail.addEventListener('click', toggleMenu);
iconHambur.addEventListener('click', toggleMobilMenu);
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIconMobile = document.querySelector('.menuHamMobile');
const mobileMenu = document.querySelector('.mobile-menu');



menuEmail.addEventListener('click', toggleDeskopMenu);
menuHamIconMobile.addEventListener('click', toggleMobileMenu)

function toggleDeskopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}
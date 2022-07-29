const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burguerMenu.addEventListener('click', toggleMobileMenu);

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

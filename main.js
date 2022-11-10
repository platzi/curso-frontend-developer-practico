//Toogle del desktopmenu en el menuEmail
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

//Toogle del HamMenu en el Icon
const icon = document.querySelector('.menu');
const HamMenu = document.querySelector('.mobile-menu');

icon.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu(){
    HamMenu.classList.toggle('inactive');
}
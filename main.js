const menuEmail = document.querySelector('.navbar-email')
const DesktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
}


const menuburguer= document.querySelector('.menu')
const MobileMenu = document.querySelector('.mobile-menu')

menuburguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    MobileMenu.classList.toggle('inactive');
}

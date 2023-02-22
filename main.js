const navMenuImail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');



navMenuImail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',togglemenu)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

}

function togglemenu(){
    mobileMenu.classList.toggle('inactive');

}
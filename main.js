const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const burguerButton=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');



menuEmail.addEventListener('click', toggleDesktopMenu);
burguerButton.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
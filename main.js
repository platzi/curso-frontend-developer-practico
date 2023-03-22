const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuEmail.addEventListener('blur', hideDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('invisible')) {
        desktopMenu.classList.remove('invisible');
    } else {
        desktopMenu.classList.add('invisible');
    }
    
}

function hideDesktopMenu() {
    desktopMenu.classList.add('invisible');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('invisible');
}
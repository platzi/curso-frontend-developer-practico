const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

toggleDesktopMenu()

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

toggleMobileMenu()

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

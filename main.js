const menuEmail = document.querySelector('.navbar-email');
menuEmail.addEventListener('click', activeDesktopMenu);

const desktopMenu = document.querySelector('.desktop-menu');

const hamburMenu = document.querySelector('.menu')
hamburMenu.addEventListener('click', activeMobileMenu)

const mobileMenu = document.querySelector('.mobile-menu')



function activeDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function activeMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}
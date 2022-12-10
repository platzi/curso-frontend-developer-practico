const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobileMenu = document.querySelector('.mobile-menu');
const navbarMobileMenuIcon = document.querySelector('.menu');

navbarMobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (desktopMenu.classList.contains('inactive')) {
        navbarEmail.innerText = 'Open';
    } else {
        navbarEmail.innerText = 'Close';
    }
}

function toggleMobileMenu() {
    navbarMobileMenu.classList.toggle('inactive');
}


console.log("funcionan js")


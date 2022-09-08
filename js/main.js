const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const mobileMenuLine = document.querySelector('.mobile-menu ul:nth-child(1)');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
};

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

/**
 * Variables for desktop menu
 */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/**
 * Variables for mobile menu
 */
const imgMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', () => toggleMenu(desktopMenu));

imgMenu.addEventListener('click', () => toggleMenu(mobileMenu));


function toggleMenu(element) {
    element.classList.toggle('inactive');
}


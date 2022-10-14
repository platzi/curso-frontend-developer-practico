const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu');

// Desktop
navEmail.addEventListener('click', toggleDesktopMenu)

// Mobile
burgerMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu ()
{
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu ()
{
    mobileMenu.classList.toggle('inactive')
}
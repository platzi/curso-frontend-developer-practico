const navbarMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarMail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    //Solución del instructor:
    //Este quita o pone la clase 'Inactive' dependiendo si ya la tiene
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    //Solución del instructor:
    //Este quita o pone la clase 'Inactive' dependiendo si ya la tiene
    mobileMenu.classList.toggle('inactive');
}
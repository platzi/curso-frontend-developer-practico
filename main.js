const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const btnBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}

navBarEmail.addEventListener('click', toggleDesktopMenu);


const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
}

btnBurger.addEventListener('click', toggleMobileMenu);






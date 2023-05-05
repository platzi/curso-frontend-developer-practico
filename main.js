const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);


// aqui vamos a hacer que aparezca o desaparezca el menu
// en desktop:
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
};

// en mobile:
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
};

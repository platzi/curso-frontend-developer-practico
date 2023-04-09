const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const logoDeMenu = document.querySelector(".logoMenu");
const mobileMenu = document.querySelector(".mobile-menu");


navbarEmail.addEventListener('click', toggleDesktopMenu);
logoDeMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
};
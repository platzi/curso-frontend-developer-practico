const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuEmail = document.querySelector(".navbar-email");
const menuMobileIcon = document.querySelector(".menu")

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
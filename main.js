const navEmail = document.querySelector(".navbar-email");
const inactive = document.querySelector(".inactive");
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu(){
    inactive.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}





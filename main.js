//Desktop Menu
const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");



navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle("inactive");
});

//mobile menu
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click',() => {
    mobileMenu.classList.toggle('inactive')
});
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}



/*
const menuDesktop = document.querySelector('.inactive')
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
});

otra forma

navEmail.addEventListener("click", toggleDesktopMenu);

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive");
};
*/




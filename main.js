const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

console.log(hamburguerMenu);
console.log(menuEmail);
console.log(desktopMenu);

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('Clic');
    desktopMenu.classList.toggle('inactive');
}

hamburguerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    console.log('Clic hamburger menu');
    mobileMenu.classList.toggle('inactive');
}
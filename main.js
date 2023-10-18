const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
})

menuHamIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
})

menuCarIcon.addEventListener('click', () => {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
})
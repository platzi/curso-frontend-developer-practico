const navEmail = document.querySelector('.navbar-email');

const menuHamIcon = document.querySelector('#hamIcon');
const menucarritoIcon = document.querySelector('.navbar-shopping-cart');

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
})

menuHamIcon.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
})

menucarritoIcon.addEventListener('click', ()=> {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')
})


const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHomIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navEmail.addEventListener('click', toggleDesktopManu);
menuHomIcon.addEventListener('click', toggleMobileManu);

function toggleDesktopManu(){

    desktopMenu.classList.toggle('inactive'); //Quita o pone una clase dependiendo si la tiene o no 
}

function toggleMobileManu(){

    mobileMenu.classList.toggle('inactive'); //Quita o pone una clase dependiendo si la tiene o no 
}
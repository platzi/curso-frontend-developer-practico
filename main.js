const navbar_email = document.querySelector('.navbar-email');
const navbar_burger = document.querySelector('.menu');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');

navbar_email.addEventListener('click', e => {
    desktop_menu.classList.toggle('inactive');
    console.log(e)
});
navbar_burger.addEventListener('click', () => mobile_menu.classList.toggle('visible'));

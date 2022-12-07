const navbar_email = document.querySelector('.navbar-email');
const menu_desplegable = document.querySelector('.desktop-menu');
const burger_menu = document.querySelector('.menu');

burger_menu.addEventListener('click', () => {
    menu_desplegable.classList.toggle('inactive');
})

navbar_email.addEventListener('click', () => {
    menu_desplegable.classList.toggle('inactive');
});
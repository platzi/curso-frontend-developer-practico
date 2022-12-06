const navbar_email = document.querySelector('.navbar-email');
const menu_desplegable = document.querySelector('.desktop-menu');
navbar_email.addEventListener('click', () => {
    menu_desplegable.classList.toggle('display');
});
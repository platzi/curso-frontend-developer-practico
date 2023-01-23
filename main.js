const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

nav_email.addEventListener('click', () => {
    desktop_menu.classList.toggle('inactive');
});

// Mobile Menu

const menu_icon = document.querySelector('.menu');
const menu_mobile = document.querySelector('.mobile-menu');

menu_icon.addEventListener('click', () => {
    menu_mobile.classList.toggle('inactive');
})

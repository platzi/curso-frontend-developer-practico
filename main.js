//desktop-menu
const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
email.addEventListener('click', function () {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

//mobile-menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('inactive');
});
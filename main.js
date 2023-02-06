const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('mouseenter' , toggleDesktopMenu);

 function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
 }
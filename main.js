const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');



navEmail.addEventListener('click', toggleDestokMenu);


// Esta función alterna la clase 'inactive' al elemento "desktopMenu" el cual aparece o desaparece el menu.
function toggleDestokMenu() {

    desktopMenu.classList.toggle('inactive');

}
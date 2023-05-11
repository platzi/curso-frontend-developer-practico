const varEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

varEmail.addEventListener('click',showMenu);

function showMenu(){
        desktopMenu.classList.toggle('inactive');
};
console.log('Js funcionando')
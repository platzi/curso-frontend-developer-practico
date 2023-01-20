const menuEmail = document.querySelector('.navbar-email');
const destktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    destktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando');
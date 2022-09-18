const menuEmail = document.querySelector('.navbar-right');
const DesktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('Click');
    DesktopMenu.classList.toggle('incative');
}

console.log('JS ');
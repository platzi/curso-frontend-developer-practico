
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('clickod');
    desktopMenu.classList.toggle('inactive'); //esta parte nos ayuda a poner o ocultar pedazos de css
}


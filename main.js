const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Activa la funcion (toggleDesktorMenu) mediante el click
menuEmail.addEventListener('click', toggleDesktopMenu);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};
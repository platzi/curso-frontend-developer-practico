// Se colocan las variables en primer lugar
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


// Activa la funcion (toggleDesktorMenu) mediante el click
menuEmail.addEventListener('click', toggleDesktopMenu);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};

// ----------------------------------------------------------------------------------------------

// Activa la funcion (toggleMobileMenu) mediante el click
menuHamIcon.addEventListener('click', toggleMobileMenu);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
};
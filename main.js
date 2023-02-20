const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// desplegar desktopMenu al hacer click a navbarEmai
navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(event){
    // metodo de JuanDC
    desktopMenu.classList.toggle('inactive')
    // metodo de stackOverflow
    // desktopMenu.style = 'display:block'
}
const MenuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

MenuMail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');
    console.log("Hola")
}

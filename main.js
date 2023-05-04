const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

// aqui vamos a hacer que aparezca o desaparezca el menu
function toggleDesktopMenu() {
    console.log("Click");
    desktopMenu.classList.toggle("inactive");
};

console.log("JS Funcionando");
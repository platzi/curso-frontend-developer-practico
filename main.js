const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleShowDesktopMenu);

function toggleShowDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //Quita o pone la clase
    // inactive dependiendo si la tiene o no.
}
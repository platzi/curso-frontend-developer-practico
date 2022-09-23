const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDeskTopMenu);


function toggleDeskTopMenu() {
    deskTopMenu.classList.toggle('inactive');
}

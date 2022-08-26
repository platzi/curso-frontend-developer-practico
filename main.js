const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() { //Con esta función estoy haciendo que se muestre el menú de MyOrders al dar click en el correo asignado. 
    desktopMenu.classList.toggle('inactive');
}

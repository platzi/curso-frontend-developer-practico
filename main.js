const navEmail = document.querySelector(".navbar-email");
const destokMenu = document.querySelector(".desktop-menu");

navEmail,addEventListener('click', toggleDestokMenu);

function toggleDestokMenu() {
    destokMenu.classList.toggle('inactive');
}

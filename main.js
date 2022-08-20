const navEmail = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click', displayMenu);

function displayMenu() {
    menu.classList.toggle('inactive');
}
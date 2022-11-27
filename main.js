const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click',toggleMenuDesktop);

function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
}
const $ = (element) => document.querySelector(element);
const email = $('.navbar-email');
const desktopMenu= $('.desktop-menu');
email.addEventListener('click', toggleDesktop)
function toggleDesktop() {
    desktopMenu.classList.toggle('inactive');
}

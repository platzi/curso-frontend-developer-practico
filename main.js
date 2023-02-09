const arrowMenuLeft = document.getElementById('email-arrow-menu');
const desktopMenu = document.querySelector('.desktop-menu');

arrowMenuLeft.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    arrowMenuLeft.classList.toggle('arrow-down');
    console.log(desktopMenu.classList);
}
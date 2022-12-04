const menuEmain = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmain.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    console.log('click');
 desktopMenu.classList.toggle('inactive');
}

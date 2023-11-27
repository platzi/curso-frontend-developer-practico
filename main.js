const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
let toggleState = false;

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    toggleState = !toggleState;
    if (toggleState == true) {
        desktopMenu.setAttribute('class', 'desktop-menu')
    } else {
        desktopMenu.setAttribute('class', 'desktop-menu inactive')
    }
}
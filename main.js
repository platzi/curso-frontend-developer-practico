const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

console.log(menuEmail);
console.log(desktopMenu);


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('Clic');
    desktopMenu.classList.toggle('inactive');
}
const navEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

console.log('JS Funcionando');
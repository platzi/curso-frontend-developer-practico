const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}

navBarEmail.addEventListener('click', toggleDesktopMenu);



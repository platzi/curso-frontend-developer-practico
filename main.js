function deployDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

const navBarEmail = document.querySelector('.navbar-email');
 const desktopMenu = document.querySelector('.desktop-menu');

 navBarEmail.addEventListener('click', deployDesktopMenu);

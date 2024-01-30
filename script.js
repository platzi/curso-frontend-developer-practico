const menuUser = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuUser.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

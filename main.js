const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");


navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle("inactive");
}
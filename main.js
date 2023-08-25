const menu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".navbar-email");

function toggleDesktopMenu(){
    menu.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
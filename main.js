const email = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu")
email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
}
const navEmail = document.querySelector(".navbar-email");
const dekstopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    dekstopMenu.classList.toggle("inactive");
}


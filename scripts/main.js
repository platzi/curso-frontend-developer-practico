let navEmail = document.querySelector(".navbar-email");
navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(event) {
    let desktopMenu = document.querySelector(".desktop-menu");
    desktopMenu.classList.toggle("inactive");
}
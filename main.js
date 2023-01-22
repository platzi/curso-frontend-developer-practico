const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");



navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle("inactive");
});

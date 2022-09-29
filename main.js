const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
        desktopMenu.classList.toggle("inactive");
}



/*
const menuDesktop = document.querySelector('.inactive')
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
});

otra forma

navEmail.addEventListener("click", toggleDesktopMenu);

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive");
};
*/


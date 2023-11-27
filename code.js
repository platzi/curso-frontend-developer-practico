const menuEmail = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  menuEmail.classList.toggle('inactive');
}

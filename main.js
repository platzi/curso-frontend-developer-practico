const menuEmail = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
menuEmail.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("inactive");
}

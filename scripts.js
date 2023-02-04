const email = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");

email.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("inactive");
}

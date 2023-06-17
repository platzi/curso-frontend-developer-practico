const desktop_menu = document.querySelector(".desktop-menu");
const email = document.querySelector(".navbar-email a");

const mobile_menu = document.querySelector(".mobile-menu");
const icon_menu = document.querySelector(".menu");

email.addEventListener("click", toggleDesktopUser);
icon_menu.addEventListener("click", toggleMobileMenu);

function toggleDesktopUser(event) {
  event.preventDefault();
  desktop_menu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobile_menu.classList.toggle("inactive");
}

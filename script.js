const desktop_menu = document.querySelector(".desktop-menu");
const email = document.querySelector(".navbar-email a");

email.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(event) {
  event.preventDefault();
  desktop_menu.classList.toggle('inactive');
  desktop_menu.setAttribute('style','animation: alternate;')
}

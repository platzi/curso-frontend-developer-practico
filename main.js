const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", function () {
  desktopMenu.classList.toggle("inactive");
});

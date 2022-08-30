const navEmail = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleDetails);

function toggleDetails() {
    menu.classList.toggle("inactive");
}
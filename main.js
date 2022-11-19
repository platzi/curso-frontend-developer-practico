const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

mail.addEventListener("click", toggleDesktoMenu);

function toggleDesktoMenu(){
    desktopMenu.classList.toggle("inactive");
}
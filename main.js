const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    // toggle dependiendo de si ya la tiene, la quita o la pone
    desktopMenu.classList.toggle("inactive");
}
const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu =document.querySelector(".desktop-menu");

navBarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu()
    {
        desktopMenu.classList.toggle("inactive");
    }
let nav_email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

nav_email.addEventListener("click" , aparecer);

// La función .clasList.toggle muestra y desaparece el css que esta relacionado.

function aparecer()
{
   desktopMenu.classList.toggle("inactive");
}

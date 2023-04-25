const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")


navEmail.addEventListener("click", ()=>{ //Uso una funcion de flecha para el evento ya que la funcion no se volvera a usar.

    desktopMenu.classList.toggle("inactive");
});
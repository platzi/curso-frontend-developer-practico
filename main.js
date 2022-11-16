// Variables:
const deskTopEmail = document.querySelector(".navbar-email");
const deskTopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

// arrow founction
const toggleDeskMenu = () => deskTopMenu.classList.toggle("inactive");
const toggleMobileMenu = () => mobileMenu.classList.toggle("inactive");

// Escuchando eventos
function lanzarListener(param1, param2) {
  return param1.addEventListener("click", param2);
}

lanzarListener(deskTopEmail, toggleDeskMenu);
lanzarListener(mobileMenuIcon, toggleMobileMenu);

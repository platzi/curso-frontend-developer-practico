// Variables:
const deskTopEmail = document.querySelector(".navbar-email");
const deskTopMenu = document.querySelector(".desktop-menu");
const deskTopShoppingCartIcon = document.querySelector(".navbar-shopping-cart");

const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideDiv = document.querySelector(".product-detail");

// arrow founction:
const toggleDeskMenu = () => {
  const isAsideClose = asideDiv.classList.contains("inactive");

  if (!isAsideClose) {
    asideDiv.classList.add("inactive");
  }
  deskTopMenu.classList.toggle("inactive");
};

const toggleMobileMenu = () => {
  const isAsideClose = asideDiv.classList.contains("inactive");

  if (!isAsideClose) {
    asideDiv.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
};

const toggleShoppingCartAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDeskTopMenuClose = deskTopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDeskTopMenuClose) {
    deskTopMenu.classList.add("inactive");
  }

  asideDiv.classList.toggle("inactive");
};
// Escuchando eventos:
function lanzarListener(param1, param2) {
  return param1.addEventListener("click", param2);
}

lanzarListener(deskTopEmail, toggleDeskMenu);
lanzarListener(mobileMenuIcon, toggleMobileMenu);
lanzarListener(deskTopShoppingCartIcon, toggleShoppingCartAside);

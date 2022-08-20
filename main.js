//MENU DESKTOP
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//MENU MOBILE
const menuHamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//SHOPPING CAR
const menuShoppingCar = document.querySelector(".navbar-shopping-cart");
const ShoppingCarDetails = document.querySelector(".product-detail");

//WORK
function toggleDesktopMenu() {
  //contains: Comprueba si la clase indicada existe en el atributo
  const isShoppingCarDetailsClosed =
    ShoppingCarDetails.classList.contains("inactive");

  //antes de abrir el desktop menu hay que preguntar si el shopping car esta abierto, si lo esta hay que cerrarlo
  if (!isShoppingCarDetailsClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    ShoppingCarDetails.classList.add("inactive");
  }
  //toggle: si la clase inactive está presente la elimina, de lo contrario la añade, toggle tambien funciona si se le coloca una condicion ej: desktopMenu.classList.toggle("inactive", i<10) va a añadir/eliminar visible, dependiendo de la condición
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  //contains: Comprueba si la clase indicada existe en el atributo
  const isShoppingCarDetailsClosed =
    ShoppingCarDetails.classList.contains("inactive");

  //antes de abrir el mobile menu hay que preguntar si el mobile menu esta abierto, si lo esta hay que cerrarlo
  if (!isShoppingCarDetailsClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    ShoppingCarDetails.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCar() {
  //contains: Comprueba si la clase indicada existe en el atributo
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  //antes de abrir el shopping car hay que preguntar si el mobile menu esta abierto, si lo esta hay que cerrarlo
  if (!isMobileMenuClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    mobileMenu.classList.add("inactive");
  }

  //antes de abrir el shopping car hay que preguntar si el desktop menu esta abierto, si lo esta hay que cerrarlo
  if (!isDesktopMenuClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    desktopMenu.classList.add("inactive");
  }

  ShoppingCarDetails.classList.toggle("inactive");
}

//EVENT
navEmail.addEventListener("click", toggleDesktopMenu);

menuHamburger.addEventListener("click", toggleMobileMenu);

menuShoppingCar.addEventListener("click", toggleShoppingCar);

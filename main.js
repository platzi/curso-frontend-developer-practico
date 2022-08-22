const menuEmail = document.querySelector(".navbar-email");
const menudesktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", function () {
  toogleGeneral(menudesktopMenu);
});
menuHamIcon.addEventListener("click", function () {
  toogleGeneral(mobileMenu);
});
menuCarritoIcon.addEventListener("click", function () {
  toogleGeneral(aside);
});

function toogleGeneral(visualizar) {
  const estadoToogle = !visualizar.classList.contains("inactive");
  aside.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  menudesktopMenu.classList.add("inactive");

  if (estadoToogle) {
    visualizar.classList.add("inactive");
  } else {
    visualizar.classList.remove("inactive");
  }
}

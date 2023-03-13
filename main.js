const navbarEmail = document.querySelector(".navbar-email");
const userMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const burguerMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", togglerUserMenu);

burguerIcon.addEventListener("click", togglerBurguerMenu);

cartIcon.addEventListener("click", togglerCartDetail);

// function togglerUserMenu() {
//   const isCartDetailClosed = cartDetail.classList.contains("inactive");

//   if (!isCartDetailClosed) {
//     cartDetail.classList.add("inactive");
//   }

//   userMenu.classList.toggle("inactive");
// }

// function togglerBurguerMenu() {
//   const isCartDetailClosed = cartDetail.classList.contains("inactive");

//   if (!isCartDetailClosed) {
//     cartDetail.classList.add("inactive");
//   }

//   burguerMenu.classList.toggle("inactive");
// }

// function togglerCartDetail() {
//   const isBurguerMenuClosed = burguerMenu.classList.contains("inactive");
//   const isUserMenuClosed = userMenu.classList.contains("inactive");

//   if (!isBurguerMenuClosed) {
//     burguerMenu.classList.add("inactive");
//   }

//   if (!isUserMenuClosed) {
//     userMenu.classList.add("inactive");
//   }

//   cartDetail.classList.toggle("inactive");
// }

/*SOLUCION SIMPLIFICADA*/

function togglerUserMenu() {
  cartDetail.classList.add("inactive");

  userMenu.classList.toggle("inactive");
}

function togglerCartDetail() {
  userMenu.classList.add("inactive");
  burguerMenu.classList.add("inactive");

  cartDetail.classList.toggle("inactive");
}

function togglerBurguerMenu() {
  cartDetail.classList.add("inactive");

  burguerMenu.classList.toggle("inactive");
}

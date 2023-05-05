const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHam = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carroIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const container = document.querySelector(".container");

menuEmail.addEventListener("click", toggleMenuDesktop);
menuHam.addEventListener("click", toggleMobileMenu);
carroIcon.addEventListener("click", productDetails);
container.addEventListener("click", closeAllMenus);

function toggleMenuDesktop(event) {
  event.stopPropagation();
  const isProducDetailsClosed = productDetail.classList.contains("inactive");
  if (!isProducDetailsClosed) {
    productDetail.classList.add("inactive");
  }
  menuDesktop.classList.toggle("slide-desktop");
}

function toggleMobileMenu(event) {
  event.stopPropagation();
  const isProducDetailsClosed = productDetail.classList.contains("inactive");

  if (!isProducDetailsClosed) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("slide");
}

function productDetails(event) {
  event.stopPropagation();
  const isMobileMenuClosed = !mobileMenu.classList.contains("slide");
  const isDesktopMenuClosed = !menuDesktop.classList.contains("slide-desktop");

  if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    mobileMenu.classList.remove("slide");
    menuDesktop.classList.remove("slide-desktop");
  }
  productDetail.classList.toggle("inactive");
}

function closeAllMenus() {
  const isMobileMenuClosed = !mobileMenu.classList.contains("slide");
  const isDesktopMenuClosed = !menuDesktop.classList.contains("slide-desktop");
  const isProducDetailsClosed = productDetail.classList.contains("inactive");
  if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProducDetailsClosed) {
    mobileMenu.classList.remove("slide");
    menuDesktop.classList.remove("slide-desktop");
    productDetail.classList.add("inactive");
  }
}

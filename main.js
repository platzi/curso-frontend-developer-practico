const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);

function toogleDesktopMenu() {
  let isAsideClosed = aside.classList.contains("inactive");
  if(!isAsideClosed) {
    aside.classList.add("inactive");
  }
  
  
  desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu() {
  let isAsideClosed = aside.classList.contains("inactive");
  if(!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toogleCarritoAside() {
  let isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  let isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if(!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");

}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Pantalla',
  price: 320,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Compu',
  price: 520,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
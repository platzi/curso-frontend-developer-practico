//This is the code that I used to show/hide the user-menu
const menuEmail = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  productDetailContainer.classList.add('inactive');
  menuEmail.classList.toggle("inactive");
}
//This is the code that I used to show/hide the mobile-menu
const mobileMenuImg = document.querySelector(".menu-img");
const mobileMenuContainer = document.querySelector(".mobile-menu");
mobileMenuImg.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  productDetailContainer.classList.add('inactive');
  mobileMenuContainer.classList.remove('inactive');
  mobileMenuContainer.classList.toggle('hidden-mobile-menu');
}

//This part is your the shopping cart system

const shoppingCartIcon = document.querySelector('#shopping-cart-icon');
const productDetailContainer = document.querySelector('.product-detail');
shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){
  mobileMenuContainer.classList.add('inactive');
  menuEmail.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
  productDetailContainer.classList.toggle('hidden-product-detail');
}

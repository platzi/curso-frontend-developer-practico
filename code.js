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
  mobileMenuContainer.classList.toggle('inactive');
}

//This part is your the shopping cart system

const shoppingCartIcon = document.querySelector('#shopping-cart-icon');
const productDetailContainer = document.querySelector('.product-detail');
shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){
  mobileMenuContainer.classList.add('inactive');
  menuEmail.classList.add('inactive');
  productDetailContainer.classList.toggle('inactive');
}

//this part is for the products cards

const productList = [];
const productsContainer = document.querySelector('.cards-container');

productList.push({
  name: 'Product 1',
  price: 100,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Product 2',
  price: 200,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Product 3',
  price: 300,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for (product of productList){
 //here you will develop the code that creates new product cards
}
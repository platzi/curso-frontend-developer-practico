//This is the code that I used to show/hide the user-menu
const menuEmail = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  productDetailContainer.classList.add("inactive");
  menuEmail.classList.toggle("inactive");
  asideCardProduct.classList.add('inactive');
}
//This is the code that I used to show/hide the mobile-menu
const mobileMenuImg = document.querySelector(".menu-img");
const mobileMenuContainer = document.querySelector(".mobile-menu");
mobileMenuImg.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  productDetailContainer.classList.add("inactive");
  mobileMenuContainer.classList.toggle("inactive");
  asideCardProduct.classList.add('inactive');
}

//This part is your the shopping cart system

const shoppingCartIcon = document.querySelector("#shopping-cart-icon");
const productDetailContainer = document.querySelector(".product-detail");
shoppingCartIcon.addEventListener("click", toggleShoppingCart);

function toggleShoppingCart() {
  mobileMenuContainer.classList.add("inactive");
  menuEmail.classList.add("inactive");
  productDetailContainer.classList.toggle("inactive");
  asideCardProduct.classList.add('inactive');
}

//this part is for the products cards and the script that will generate new elements for them

const productList = [];
const productsContainer = document.querySelector(".cards-container");

//here i'm hard-coding the new products, obviously the products should come from a database, but for now, this will be the entry of data
productList.push({
  name: "Samsung galaxy S7",
  price: "$300",
  imgSrc: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
});
productList.push({
  name: "Camera",
  price: "$500",
  imgSrc:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "PC Gamer",
  price: "$1000",
  imgSrc: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

//This is all the code that is necessary to create new products
for (product of productList) {
  let mainDiv = document.createElement("div");
  mainDiv.className = "product-card";

  let mainImg = document.createElement("img");
  mainImg.classList.add('product-img');
  let img = product.imgSrc;
  mainImg.setAttribute("src", img);
  mainImg.setAttribute("alt", "A product");
  mainDiv.appendChild(mainImg);

  let secondDiv = document.createElement("div");
  secondDiv.className = "product-info";
  mainDiv.appendChild(secondDiv);

  let thirdDiv = document.createElement("div");
  secondDiv.appendChild(thirdDiv);

  let priceP = document.createElement("p");
  priceP.innerText = product.price;
  let nameProductP = document.createElement("p");
  nameProductP.innerText = product.name;

  thirdDiv.appendChild(priceP);
  thirdDiv.appendChild(nameProductP);

  let figure = document.createElement('figure');
  let shoppingCartImg = document.createElement('img');
  shoppingCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  shoppingCartImg.className = 'btn-add-to-cart';
  figure.appendChild(shoppingCartImg);

  secondDiv.appendChild(figure);

  //After all this code, I'mg appending this code to the main div where the products will be
  const cardContainer = document.querySelector(".cards-container");
  cardContainer.append(mainDiv);
}

//this section is for the script that will change the icon of the add-to-cart
// let addToCart = [];
// addToCart = document.querySelector(".btn-add-to-cart");

// for (aux of addToCart){
//   aux.addEventListener('click', () => {
//     aux.setAttribute("src", './icons/bt_added_to_cart.svg');
//   })
// };

//This part of the code above is for the aside

const asideCardProduct = document.querySelector('.product-detailed');
const productImgArr = document.querySelectorAll('.product-img');

for (product of productImgArr){
  product.addEventListener('click', () => {
    asideCardProduct.classList.toggle('inactive');
  });
}

//Here, I'm just creating an arrow function so that when the user clicks over the X icon, the aside product detailed disappears.
const closeIcon = document.querySelector('.product-detail-close');
closeIcon.addEventListener('click', () => {
  asideCardProduct.classList.add('inactive');
});




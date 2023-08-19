const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  aside.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  aside.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
}

const productList = [];

productList.push({
  name: "Bicicleta",
  price: 50,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 alt='bicicleta'",
});
productList.push({
  name: "Teclado",
  price: 20,
  image:
    "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt='teclado'",
});
productList.push({
  name: "Mac",
  price: 2000,
  image:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt='pantalla'",
});
productList.push({
  name: "Violín",
  price: 2800,
  image:
    "https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 alt='violín'",
});
productList.push({
  name: "Bicicleta",
  price: 50,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 alt='bicicleta'",
});
productList.push({
  name: "Teclado",
  price: 20,
  image:
    "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt='teclado'",
});
productList.push({
  name: "Mac",
  price: 2000,
  image:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt='pantalla'",
});
productList.push({
  name: "Violín",
  price: 2800,
  image:
    "https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 alt='violín'",
});
productList.push({
  name: "Bicicleta",
  price: 50,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 alt='bicicleta'",
});
productList.push({
  name: "Teclado",
  price: 20,
  image:
    "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt='teclado'",
});
productList.push({
  name: "Mac",
  price: 2000,
  image:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt='pantalla'",
});
productList.push({
  name: "Violín",
  price: 2800,
  image:
    "https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 alt='violín'",
});

// for (product of productList) {
//   const productCard = document.createElement("div");
//   productCard.classList.add("product-card");

//   // product = {name, price, image} -> product.image
//   const productImg = document.createElement("img");
//   productImg.setAttribute("src", product.image);

//   // Creamos div.product-info con sus elementos y atributos
//   const productInfo = document.createElement("div");
//   productInfo.classList.add("product-info");

//   const productInfoDiv = document.createElement("div");

//   const productPrice = document.createElement("p");
//   productPrice.innerText = "$" + product.price;

//   const productName = document.createElement("p");
//   productName.innerText = product.name;

//   productInfoDiv.append(productPrice, productName);

//   const productInfoFigure = document.createElement("figure");
//   const productImgCart = document.createElement("img");
//   productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

//   productInfoFigure.append(productImgCart);

//   productInfo.append(productInfoDiv, productInfoFigure);

//   productCard.append(productImg, productInfo);

//   cardsContainer.appendChild(productCard);
// }

function rendersProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product = {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    // Creamos div.product-info con sus elementos y atributos
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

rendersProducts(productList);

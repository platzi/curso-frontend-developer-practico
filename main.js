const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  const isProductDetailClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computer",
  price: 620,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_812833-MCO50599163370_072022-O.webp",
});
productList.push({
  name: "Phone",
  price: 280,
  image:
    "https://copservir.vtexassets.com/arquivos/ids/970331-800-auto?v=638207326220630000&width=800&height=auto&aspect=true",
});
productList.push({
  name: "Earphones",
  price: 120,
  image:
    "https://wefone.com.co/cdn/shop/products/AUDIFONOP9-2_1024x.jpg?v=1660832935",
});
productList.push({
  name: "Camera",
  price: 340,
  image:
    "https://http2.mlstatic.com/D_Q_NP_880423-MLU69745224702_062023-O.webp",
});
productList.push({
  name: "Earphones",
  price: 80,
  image: "https://smartjoys.co/wp-content/uploads/2023/02/TM-S20.jpg.webp",
});
productList.push({
  name: "Clock",
  price: 140,
  image: "https://m.media-amazon.com/images/I/616suF7t8aL._AC_SL1500_.jpg",
});
productList.push({
  name: "MacBook",
  price: 520,
  image:
    "https://www.apple.com/newsroom/images/tile-images/Apple_new-macbook-air-wallpaper-screen_03182020.jpg.landing-big_2x.jpg",
});
productList.push({
  name: "Tablet",
  price: 180,
  image:
    "https://falabella.scene7.com/is/image/FalabellaCO/62966999_1?wid=800&hei=800&qlt=70",
});

/* Escribiendo html desde js (guiandome del orden codigo html original)*/
function renderProducts(arr) {
  // meto este codigo en una funcion para organizar mi codigo
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    //productInfoDiv.append(productPrice, productName), es lo mismo que lo anterior.

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    //productInfo.append(productInfoDiv, productInfoFigure).

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    //productCard.append(productImg, productInfo)

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);

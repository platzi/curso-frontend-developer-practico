const productList = [];
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description:
    "Use it for decoration or on your everyday life! This bike is very popular for its style and durability",
  category: "Others",
});

productList.push({
  name: "Gaming laptop",
  price: 2300,
  image:
    "https://cdn.pocket-lint.com/r/s/970x/assets/images/156873-laptops-review-asus-rog-strix-scar-17-g733q-review-image10-b1t9cpgi05.jpg",
  description:
    "The fastest gaming laptop in the world. With cutting-edge quality and performing",
  category: "Electronics",
});

productList.push({
  name: "Television",
  price: 850,
  image:
    "https://www.cyberpuerta.mx/img/product/XL/CP-SAMSUNG-QN75Q70AAFXZX-8e652f.jpg",
  description:
    "55 inches 4K TV with a powerful AI to improve your experience watching movies, TV shows and more",
  category: "Electronics",
});
productList.push({
  name: "VR Headset",
  price: 400,
  image:
    "https://as01.epimg.net/meristation/imagenes/2021/04/23/reportajes/1619198749_987505_1619198976_sumario_normal.jpg",
  description:
    "The most popular standalone VR Headset. With over a thousand games to choose",
  category: "Electronics",
});
productList.push({
  name: "Bicycle helmet",
  price: 99,
  image:
    "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  description:
    "Clean aesthetic, comfortable fit, and a budget-friendly price. This helmet will surprise you for good.",
  category: "Others",
});
productList.push({
  name: "Office Chair",
  price: 89,
  image:
    "https://www.gaiadesign.com.mx/media/catalog/product/cache/e8aaa76088f22f2a09b4af5dd5c43e48/s/i/silla_oficina_viagio_negro_still1_v1.jpg",
  description: "A very comfy and reliable chair",
  category: "Furniture",
});
productList.push({
  name: "Github Octocat Figurine",
  price: 15,
  image:
    "https://media.thetoychronicle.com/wp-content/uploads/2014/10/GITHUB-OCTOCAT-dead-zebra-Andrew-Bell-side.jpg",
  description:
    "Who doesn't love Octocat? Bring Github's mascot to life in the form of a high quality 5″ tall vinyl figure!",
  category: "Toys",
});
productList.push({
  name: "Seat",
  price: 16,
  image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
  description:
    "Comfy and durable replacement seat for your bike",
  category: "Others",
});
productList.push({
  name: "Mountain Bike Shoes",
  price: 110,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
  description:
    "Very useful and stylish shoes for your Mountain activities",
  category: "Clothes",
});
productList.push({
  name: "Sunglasses",
  price: 32,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
  description:
    "This amazing glasses were created to combine design and comfort. Optimized performance provided by their ultra-lightweight PC frame of only 27 grams and their interchangeable polarized Special TAC 1.2 lens.",
  category: "Clothes",
});
productList.push({
  name: "Coffee mug",
  price: 29,
  image:
    "https://m.media-amazon.com/images/I/6155uXDd+oL._AC_SL1000_.jpg",
  description:
    "An amazing coffee mug that fill its battery level depending on your coffee's temperature",
  category: "Others",
});
productList.push({
  name: "Bicycle seat bag",
  price: 24,
  image: "https://cdn.shopify.com/s/files/1/0608/6839/5263/products/product-image-1924685906_700x700.jpg?v=1647120460",
  description:
    "Humidifier with aromatherapy function. Enjoy a more welcoming environment with its colored light (RGB). Operation control by time (4/6 hour timer) and 300ml capacity",
  category: "Others",
});

const emailDesktop = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector(".product-detail-aside");
const productDetailClosed = document.querySelector(".product-detail-close");
const countShoppingCart = document.querySelector(".navbar-shopping-cart div");
const totalAmount = document.querySelector(".total-amount");
const arrowClose = document.querySelector(".title-container img");
const arrayProductCart = [];

const darkenScreen = document.querySelector(".darken");

emailDesktop.addEventListener("click", toggleMenuDesktop);
menuHamburgerIcon.addEventListener("click", toggleMenuMobile);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);
productDetailClosed.addEventListener("click", productCloseAside);
arrowClose.addEventListener("click", toggleShoppingCart);

function darkenChange() {
  darkenScreen.classList.toggle("inactive");
}

function toggleMenuDesktop() {
  menuDesktop.classList.toggle("inactive");
  productDetail.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailAside.classList.add("inactive");

  const isMenuDesktop = !menuDesktop.classList.contains("inactive");

  if (isMenuDesktop) {
    darkenScreen.classList.remove("inactive");
  } else {
    darkenScreen.classList.add("inactive");
  }
}

function toggleMenuMobile() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
  menuDesktop.classList.add("inactive");
  productDetailAside.classList.add("inactive");

  const isMobileMenu = !mobileMenu.classList.contains("inactive");

  if (isMobileMenu) {
    darkenScreen.classList.remove("inactive");
  } else {
    darkenScreen.classList.add("inactive");
  }
}

function toggleShoppingCart() {
  productDetail.classList.toggle("inactive");
  menuDesktop.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailAside.classList.add("inactive");

  const isShoppingCart = !productDetail.classList.contains("inactive");

  if (isShoppingCart) {
    darkenScreen.classList.remove("inactive");
  } else {
    darkenScreen.classList.add("inactive");
  }
}

function productCloseAside() {
  productDetailAside.classList.add("inactive");
  productDetail.classList.add("inactive");
  menuDesktop.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  darkenScreen.classList.add("inactive");
}

function toggleCloseMenu() {
  productDetail.classList.add("inactive");
  menuDesktop.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailAside.classList.remove("inactive");
  darkenScreen.classList.remove("inactive");
}

/*Renderizamos losproductucos en un costado de la pantalla*/

function renderProducts(arr) {
  arr.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImageCard = document.createElement("img");
    productImageCard.setAttribute("src", product.image);
    productImageCard.addEventListener("click", function () {
      renderDetailsAside(product);
      toggleCloseMenu();
    });

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divInfo = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerHTML = product.name;

    const productFigure = document.createElement("figure");
    productFigure.addEventListener("click", function () {
      renderMyOrder(product);
    });

    const imageIconCart = document.createElement("img");
    imageIconCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(imageIconCart);
    divInfo.appendChild(productName);
    divInfo.appendChild(productPrice);

    productInfo.appendChild(divInfo);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImageCard);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  });
}

renderProducts(productList);

function renderDetailsAside(product) {
  productDetailAside.classList.remove("inactive");

  const productImgeDetail = document.querySelector(".detail-img");
  const productPrice = document.querySelector(
    ".product-info-aside .product-price-detail"
  );
  const productName = document.querySelector(
    ".product-info-aside .product-name-detail"
  );
  const productDescription = document.querySelector(
    ".product-description-detail"
  );
  productPrice.innerHTML = "$ " + product.price;
  productName.innerHTML = product.name;
  productImgeDetail.setAttribute("src", product.image);
  productDescription.innerHTML = product.description;
}

function renderMyOrder(product) {
  //console.log("click");
  const shoppingCart = document.querySelector(".shopping-cart");

  const divShopingCart = document.createElement("div");
  divShopingCart.classList.add("div-ShopingCart");
  const figureMyOrder = document.createElement("figure");
  const imgIconMyOrder = document.createElement("img");
  imgIconMyOrder.setAttribute("src", product.image);
  const productName = document.createElement("p");
  productName.classList.add("name-my-order");
  productName.innerHTML = product.name;
  const productPrice = document.createElement("p");
  productPrice.classList.add("price-my-order");
  productPrice.innerHTML = "$ " + product.price;
  const imgIconDelete = document.createElement("img");
  imgIconDelete.setAttribute("src", "./icons/icon_close.png");

  shoppingCart.appendChild(divShopingCart);
  divShopingCart.appendChild(figureMyOrder);
  figureMyOrder.appendChild(imgIconMyOrder);
  divShopingCart.appendChild(productName);
  divShopingCart.appendChild(productPrice);
  divShopingCart.appendChild(imgIconDelete);

  /*---- Actualizamos la cantidad de productos y sumamos el resuktado.*/
  totalAmount.innerHTML = "$0.00";

  //const priceOrder = document.querySelectorAll(".price-my-order");
  //countShoppingCart.innerHTML = priceOrder.length;
  countShoppingCart.innerHTML = shoppingCart.childElementCount;
  totalAmount.innerHTML =
    Number(totalAmount.innerHTML.substring(1)) + product.price;
  arrayProductCart.push(Number(totalAmount.innerHTML));

  totalAmount.innerHTML = "$ " + sumProducts(arrayProductCart);

  /*Elimina producto de My Order* y actualiza eldato en el carrito*/
  imgIconDelete.addEventListener("click", function () {
    divShopingCart.remove();
    countShoppingCart.innerHTML = shoppingCart.childElementCount;

    const getTotal = document.querySelectorAll(".total-amount");
    const getTotalNumber = Number(
      Array.from(getTotal)[0].innerHTML.substring(1)
    );

    getTotal[0].innerHTML = "$ " + (getTotalNumber - product.price);
    arrayProductCart.splice(-1, 1);
  });
}

function sumProducts(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

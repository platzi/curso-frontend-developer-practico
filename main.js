const $menuEmail = document.querySelector(".navbar-email");
const $desktopMenu = document.querySelector(".desktop-menu");
const $iconHamburgerMenu = document.querySelector(".menu");
const $mobileMenu = document.querySelector(".mobile-menu");
const $shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const $menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const $productContainer = document.querySelector(".cards-container");
const $productDetail = document.querySelector("#productDetail");
const $btnProducDetailClose = document.querySelector(".product-detail-close");
const $btnCloseCartShopping = document.querySelector("#closeCartShopping");

$menuEmail.addEventListener("click", toggleMenuDesktop);
$iconHamburgerMenu.addEventListener("click", toggleMenuMobile);
$menuCarritoIcon.addEventListener("click", toggleCarritoAside);
$btnProducDetailClose.addEventListener("click", closeProductDetail);
$btnCloseCartShopping.addEventListener("click", toggleCarritoAside);

function toggleMenuDesktop() {
  $shoppingCardContainer.classList.add("inactive");
  $productDetail.classList.add("inactive");
  $desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  $shoppingCardContainer.classList.add("inactive");
  $productDetail.classList.add("inactive");
  $mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  $desktopMenu.classList.add("inactive");
  $mobileMenu.classList.add("inactive");
  $productDetail.classList.add("inactive");
  $shoppingCardContainer.classList.toggle("inactive");
}

function closeProductDetail() {
  $productDetail.classList.add("inactive");
}

function openProductDetail(product) {
  $desktopMenu.classList.add("inactive");
  $mobileMenu.classList.add("inactive");
  $shoppingCardContainer.classList.add("inactive");
  const buscarProductShow = () => {
    return productList.find((productActual) => productActual.isShow);
  };
  const productIsShow = buscarProductShow();
  if (!product.isShow) {
    product.isShow = "true";
  }
  if (productIsShow) {
    if (productIsShow !== product) {
      productIsShow.isShow = false;
      closeProductDetail();
      console.log("Ocultando producto");
    }
  }
  $productDetail.classList.remove("inactive");
  renderProductDetailContent(product);
}

function removeProductCartShopping(productToRemove) {
  listProductCartShopping = listProductCartShopping.filter(
    (product) => product !== productToRemove
  );
  renderProductCartShopping();
  updateQuantityProducts();
  renderTotalCostsCartShopping();
}

function renderProductDetailContent(product) {
  const $productDetailImg = document.querySelector("#productDetailImg");
  const $productDetailPrice = document.querySelector("#productDetailPrice");
  const $productDetailName = document.querySelector("#productDetailName");
  const $productDetailDescription = document.querySelector(
    "#productDetailDescription"
  );
  const $btnAddToCartProduct = document.querySelector(".add-to-cart-button");
  const { image, price, name, description } = product;

  $productDetailImg.setAttribute("src", image);
  $productDetailPrice.innerText = `$${price}`;
  $productDetailName.innerText = name;
  $productDetailDescription.innerText = description.replace(
    "bike",
    name.toLowerCase()
  );
  $btnAddToCartProduct.onclick = () => {
    addProductCartShopping(product);
  };
}

function addProductCartShopping(product) {
  listProductCartShopping.push(product);
  renderProductCartShopping();
  updateQuantityProducts();
  renderTotalCostsCartShopping();
}

function cleanParentElementContent($parentElement) {
  while ($parentElement.firstChild) {
    $parentElement.removeChild($parentElement.firstChild);
  }
}

function updateQuantityProducts() {
  const $quantityProducts = document.querySelector("#quantityProducts");
  $quantityProducts.innerText = listProductCartShopping.length;
}

function calculateTotalCostsCartShopping() {
  const inicialValor = 0;
  return listProductCartShopping.reduce(
    (AcumCosts, { price }) => AcumCosts + price,
    inicialValor
  );
}

function renderTotalCostsCartShopping() {
  $totalCostsCartShopping = document.querySelector("#totalCostsCartShopping");
  $totalCostsCartShopping.innerText = `$${calculateTotalCostsCartShopping()}`;
}
function renderProductCartShopping() {
  const $orderContent = document.querySelector(".my-order-content");

  cleanParentElementContent($orderContent);

  listProductCartShopping.forEach((product, indice) => {
    const { image, price, name } = product;

    $productOrderDiv = document.createElement("div");
    $productOrderDiv.classList.add("shopping-cart");

    $productOrderFigure = document.createElement("figure");

    $productOrderImg = document.createElement("img");
    $productOrderImg.setAttribute("src", image);

    $productOrderName = document.createElement("p");
    $productOrderName.innerText = name;

    $productOrderPrice = document.createElement("p");
    $productOrderPrice.innerText = `$${price}`;

    $btnRemoveProductOrder = document.createElement("img");
    $btnRemoveProductOrder.setAttribute("src", "./icons/icon_close.png");
    $btnRemoveProductOrder.setAttribute(
      "id",
      `btnRemoveProductOrder-${indice}`
    );
    $btnRemoveProductOrder.onclick = () => {
      removeProductCartShopping(product);
    };

    $productOrderFigure.appendChild($productOrderImg);
    $productOrderDiv.appendChild($productOrderFigure);
    $productOrderDiv.appendChild($productOrderName);
    $productOrderDiv.appendChild($productOrderPrice);
    $productOrderDiv.appendChild($btnRemoveProductOrder);
    $orderContent.appendChild($productOrderDiv);
  });
}
const productList = [];
let listProductCartShopping = [];

function addProductToList() {
  productList.push({
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Bike",
    price: 100,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shoes",
    price: 125,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sunglasses",
    price: 80,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Computer",
    price: 680,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Camara",
    price: 60,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/914996/pexels-photo-914996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "ice skates",
    price: 300,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Bike",
    price: 100,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shoes",
    price: 125,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sunglasses",
    price: 80,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Computer",
    price: 680,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Camara",
    price: 60,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/914996/pexels-photo-914996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "ice skates",
    price: 300,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Bike",
    price: 100,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shoes",
    price: 125,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sunglasses",
    price: 80,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Computer",
    price: 680,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Camara",
    price: 60,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://images.pexels.com/photos/914996/pexels-photo-914996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "ice skates",
    price: 300,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
}

function renderProduct(arr) {
  arr.forEach((product) => {
    const { image, name, price } = product;
    const $productCard = document.createElement("div");
    $productCard.classList.add("product-card");

    const $productImg = document.createElement("img");
    $productImg.setAttribute("src", image);
    $productImg.addEventListener(
      "click",
      openProductDetail.bind(this, product)
    ); // $productImg.onClick = openProductDetail;

    const $productInfo = document.createElement("div");
    $productInfo.classList.add("product-info");

    const $productInfoDiv = document.createElement("div");

    const $productPrice = document.createElement("p");
    $productPrice.innerText = `$ ${price}`;

    const $productName = document.createElement("p");
    $productName.innerText = name;

    $productInfoDiv.appendChild($productPrice);
    $productInfoDiv.appendChild($productName);

    const $productInfoFigure = document.createElement("figure");
    $productInfoFigure.addEventListener(
      "click",
      addProductCartShopping.bind(this, product)
    );

    const $productImgCard = document.createElement("img");
    $productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    $productInfoFigure.appendChild($productImgCard);

    $productInfo.appendChild($productInfoDiv);
    $productInfo.appendChild($productInfoFigure);

    $productCard.appendChild($productImg);
    $productCard.appendChild($productInfo);

    $productContainer.appendChild($productCard);
  });
}

addProductToList();
renderProduct(productList);

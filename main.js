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
$btnProducDetailClose.addEventListener(
  "click",
  animationClose.bind(this, $productDetail, "leave-to-right")
);
$btnCloseCartShopping.addEventListener("click", toggleCarritoAside);

function animationOpen($elementToOpen, nameAnimation) {
  $elementToOpen.classList.remove("inactive");
  $elementToOpen.style.animationName = nameAnimation;
}

function animationClose($elementToClose, nameAnimation) {
  $elementToClose.style.animationName = nameAnimation;
  setTimeout(() => {
    $elementToClose.classList.add("inactive");
  }, 600);
}

function toggleMenuDesktop() {
  const nameAnimation = "leave-to-right";
  animationClose($shoppingCardContainer, nameAnimation);
  animationClose($productDetail, nameAnimation);
  $desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  let nameAnimation = "leave-to-right";
  animationClose($shoppingCardContainer, nameAnimation);
  animationClose($productDetail, nameAnimation);

  const isContainsInactive = $mobileMenu.classList.contains("inactive");

  if (!isContainsInactive) {
    nameAnimation = "leave-to-left";
    animationClose($mobileMenu, nameAnimation);
    return;
  }
  nameAnimation = "enter-to-left";
  animationOpen($mobileMenu, nameAnimation);
}

function toggleCarritoAside() {
  $desktopMenu.classList.add("inactive");
  let nameAnimation = "leave-to-left";
  animationClose($mobileMenu, nameAnimation);
  nameAnimation = "leave-to-right";
  animationClose($productDetail, nameAnimation);
  const isContainsInactive =
    $shoppingCardContainer.classList.contains("inactive");
  if (!isContainsInactive) {
    nameAnimation = "leave-to-right";
    animationClose($shoppingCardContainer, nameAnimation);
    return;
  }
  nameAnimation = "enter-to-right";
  animationOpen($shoppingCardContainer, nameAnimation);
}

function openProductDetail(product) {
  $desktopMenu.classList.add("inactive");
  let nameAnimation = "leave-to-left";
  animationClose($mobileMenu, nameAnimation);
  nameAnimation = "leave-to-right";
  animationClose($shoppingCardContainer, nameAnimation);
  const buscarProductShow = () => {
    return productList.find((productActual) => productActual.isShow);
  };
  let productIsShow;
  if (!product.isShow) {
    productIsShow = buscarProductShow();
    product.isShow = true;
  }
  if (productIsShow) {
    if (productIsShow !== product) {
      productIsShow.isShow = false;
      nameAnimation = "leave-to-right";
      animationClose($productDetail, nameAnimation);
      setTimeout(() => {
        openProductDetail(product);
      }, 600);
      return;
    }
  }
  nameAnimation = "enter-to-right";
  animationOpen($productDetail, nameAnimation);
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
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0a7f06b2/products/PU389008-09/PU389008-09-1.JPG",
    name: "Zapatillas Puma Graviton Mega Unisex",
    price: 100,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw40e48acb/products/PU389003-01/PU389003-01-1.JPG",
    name: "Zapatillas Puma Rbd Game Unisex",
    price: 125,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4d8367f8/products/NIDM1119-005/NIDM1119-005-1.JPG",
    name: "Zapatillas Entrenamiento Nike Legend Essential 3 Next Nature Mujer",
    price: 80,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa7e3700d/products/ADHQ1730/ADHQ1730-1.JPG",
    name: "Zapatillas Running adidas Comfort Mujer",
    price: 680,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3f4dd6f9/products/NI_DD9294-001/NI_DD9294-001-1.JPG",
    name: "Zapatillas Nike Downshifter 12",
    price: 60,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6cb9cd8d/products/PU_378144-01/PU_378144-01-1.JPG",
    name: "Zapatillas Puma Retaliate 2",
    price: 300,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb6dc54e1/products/NI_DH2987-001/NI_DH2987-001-1.JPG",
    name: "Zapatillas Nike Court Vision Lo Be",
    price: 100,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe3806098/products/NIDM9537-002/NIDM9537-002-1.JPG",
    name: "Zapatillas Nike Nike Air Max Systm Hombre",
    price: 125,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
  productList.push({
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4d5af313/products/NI_CW4555-006/NI_CW4555-006-1.JPG",
    name: "Zapatillas Nike Air Max Sc",
    price: 60,
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  });
}

function renderProduct(arr) {
  arr.forEach((product) => {
    const { image, name, price } = product;
    const $productCard = document.createElement("article");
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

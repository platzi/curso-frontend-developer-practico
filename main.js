const navbarEmail = document.querySelector(".navbar-email");
const burgerMenuIcon = document.querySelector(".burger-menu-icon");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const detailedProductCloseIcon = document.querySelector(
  ".detailed-product-close"
);
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideShoppingCartContainer = document.querySelector(
  "#shoppingCartContainer"
);
const cardsContainer = document.querySelector(".cards-container");
const detailedProductContainer = document.querySelector(".detailed-product");

const productList = [
  {
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Hair Dryer",
    price: 60,
    img: "https://images.pexels.com/photos/973402/pexels-photo-973402.jpeg",
  },
  {
    name: "Electric Bike",
    price: 690,
    img: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Gaming Computer",
    price: 792,
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Amusement Park",
    price: 4500,
    img: "https://images.pexels.com/photos/9320450/pexels-photo-9320450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Fighter Jet",
    price: 3900,
    img: "https://images.pexels.com/photos/76971/fighter-jet-fighter-aircraft-f-16-falcon-aircraft-76971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

navbarEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleAsideShoppingCart);
detailedProductCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  asideShoppingCartContainer.classList.add("deactivated");
  desktopMenu.classList.toggle("deactivated");
  detailedProductContainer.classList.add("deactivated");
}

function toggleMobileMenu() {
  asideShoppingCartContainer.classList.add("deactivated");
  mobileMenu.classList.toggle("deactivated");
  detailedProductContainer.classList.add("deactivated");

  /*
  const isMobileMenuOpen = !mobileMenu.classList.contains("deactivated");
  const isAsideShoppingCartOpen =
    !asideShoppingCartContainer.classList.contains("deactivated");
  if (isAsideShoppingCartOpen) {
    asideProductDetail.classList.add("deactivated");
  }
  */
}

function toggleAsideShoppingCart() {
  desktopMenu.classList.add("deactivated");
  mobileMenu.classList.add("deactivated");
  asideShoppingCartContainer.classList.toggle("deactivated");
  detailedProductContainer.classList.add("deactivated");
  /*
    const isMobileMenuOpen = !mobileMenu.classList.contains("deactivated");

  const isAsideShoppingCartOpen =
    !asideShoppingCartContainer.classList.contains("deactivated");

  const isDetailedProductOpen =
    !detailedProductContainer.classList.contains("deactivated");
  if (isMobileMenuOpen) {
    mobileMenu.classList.add("deactivated");
  }
  */
}

function openProductDetailAside() {
  detailedProductContainer.classList.remove("deactivated");
  asideShoppingCartContainer.classList.add("deactivated");
  desktopMenu.classList.add("deactivated");
}

function closeProductDetailAside() {
  detailedProductContainer.classList.add("deactivated");
}

function renderProducts(productArr) {
  for (product of productArr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.textContent = `$ ${product.price}`;

    const productName = document.createElement("p");
    productName.textContent = product.name;

    const productInfoFigure = document.createElement("figure");

    const figureImg = document.createElement("img");
    figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoDiv.append(productName, productPrice);
    productInfoFigure.appendChild(figureImg);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

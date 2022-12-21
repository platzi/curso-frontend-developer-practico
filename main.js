const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDectailCloseIcon = document.querySelector(".product-detail-close");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDectailContainer = document.querySelector("#productDectail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDectailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  }
  const isProductDectailClosed =
    productDectailContainer.classList.contains("inactive");
  if (!isProductDectailClosed) {
    productDectailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDectailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDectailContainer.classList.add("inactive");
}
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAtr9hrc2rMCgB5sUTq9hZrwzDO2YqSsccA&usqp=CAU",
});
productList.push({
  name: "screen",
  price: 220,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx72vd9oNaiyhYIfCNDNHu9_erC7XFQjQ2eg&usqp=CAU",
});
productList.push({
  name: "headphones",
  price: 100,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW5GRN9qO-_TPUJVfmIA9561wqT6QmkcCjvousjrOz6JiXsBS56wedqHrVkX9bFKcUME&usqp=CAU",
});
productList.push({
  name: "lapto",
  price: 700,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8GjyPexC74rgmt5WHQWX46f00X0WFu54sA&usqp=CAU",
});
productList.push({
  name: "movil",
  price: 650,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY87m_6Fn6Ohf08NxlvC9ZvbJOZDdnifzbhw&usqp=CAU",
});
productList.push({
  name: "table",
  price: 300,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9A8LU9eTGF4j9A2oIAYLFzKmYJqaw-mQi5g&usqp=CAU",
});
productList.push({
  name: "Decorations",
  price: 100,
  image:
    "https://www.elmueble.com/medio/2021/01/04/0125-ab2f8053-2000x1333_4a952138_2000x1333.jpg",
});
productList.push({
  name: "instruments",
  price: 700,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQumOH_os-bMc1Z5fG8mDfD_bjujI96XqpQk8Fr1m-o8CSRk_zQ0Ut_XIUPCs7eMubpss&usqp=CAU",
});
productList.push({
  name: "furniture",
  price: 650,
  image:
    "https://media.istockphoto.com/id/1350859272/es/foto/muebles-de-lujo.jpg?b=1&s=170667a&w=0&k=20&c=MejpinLUsJZ8pOgsr2D3Jz5y5aqrGHIlteLj7ysNBY8=",
});
productList.push({
  name: "Toys",
  price: 300,
  image:
    "https://media.istockphoto.com/id/642542254/es/vector/colecci%C3%B3n-de-iconos-de-juguete.jpg?s=612x612&w=0&k=20&c=AWWU-5VgZPJwAd5ZIYULjTpc5RhW-QWBVRe8wGxnwSU=",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

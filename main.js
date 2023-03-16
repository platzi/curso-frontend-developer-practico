const d = document,
  cardsContainer = d.querySelector(".cards-container"),
  navbarEmail = d.querySelector(".navbar-email"),
  navbarShoppingcart = d.querySelector(".navbar-shopping-cart"),
  toggleDesktopMenu = d.querySelector(".desktop-menu"),
  iconMenuMobile = d.querySelector(".menu"),
  menuMobile = d.querySelector(".mobile-menu"),
  productDetail = d.querySelector("#product-detail-shopping-cart"),
  productDetailClose = d.querySelector(".product-detail-close"),
  productDetailSpecifications = d.querySelector(
    "#product-detail-specifications"
  );

navbarEmail.addEventListener("click", toggleDesktop);
function toggleDesktop() {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
  toggleDesktopMenu.classList.toggle("inactive");

  closeProductDetails(); //aca no funciona
}

iconMenuMobile.addEventListener("click", toggleMobile);
function toggleMobile() {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }

  if (!productDetailSpecifications.classList.contains("inactive")) {
    productDetailSpecifications.classList.add("inactive");
  }
  //productDetailSpecifications
  menuMobile.classList.toggle("inactive");
}

navbarShoppingcart.addEventListener("click", toggleShoppingCart);
function toggleShoppingCart() {
  if (!menuMobile.classList.contains("inactive")) {
    menuMobile.classList.add("inactive");
  }
  if (!toggleDesktopMenu.classList.contains("inactive")) {
    toggleDesktopMenu.classList.add("inactive");
  }

  productDetailSpecifications.classList.add("inactive");

  productDetail.classList.toggle("inactive");
}

function showProductDetails() {
  productDetailSpecifications.classList.remove("inactive");
  toggleDesktopMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function closeProductDetails() {
  productDetailSpecifications.classList.add("inactive");
}

productDetailClose.addEventListener("click", closeProductDetails);

const productList = [];
productList.push({
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: "120,00",
  article: "bike",
});
productList.push({
  img: "https://www.pcspecialist.es/images/landing/pcs/gaming-pc/bundle.jpg",
  price: "220,00",
  article: "pc",
});
productList.push({
  img: "https://helios-i.mashable.com/imagery/articles/07rvAHiXL4HbknW06ueFJot/hero-image.fill.size_1200x1200.v1657736399.jpg",
  price: "320,00",
  article: "phone",
});

function setProducts(arr) {
  for (product of productList) {
    //Se crea el contenedor principal
    const productCard = d.createElement("div");
    productCard.classList.add("product-card");

    //Se crea la img del contenedor
    const img = d.createElement("img");
    img.setAttribute("src", product.img);

    img.addEventListener("click", showProductDetails);

    //Se crea el div que contendrá otro div (para el precio y el nombre del artículo) y una figure (que contendrá una img para el ícono)
    const productInfo = d.createElement("div");
    productInfo.classList.add("product-info");

    //Se crea un div que contendrá el precio y el nombre del artículo
    const productInfoContainer = d.createElement("div");

    //Se crea un p con el precio
    const productPrice = d.createElement("p");
    productPrice.innerText = "$" + product.price;
    //Se crea un p con el artículo
    const productArticle = d.createElement("p");
    productArticle.innerText = product.article;

    productInfoContainer.appendChild(productPrice);
    productInfoContainer.appendChild(productArticle);

    //Se crea la figure que contendra una img(la cual contendra el ícono)
    const productFigure = d.createElement("figure");

    //Se crea la img que contendra el ícono
    const productImg = d.createElement("img");
    productImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(productImg);

    productInfo.appendChild(productInfoContainer);
    productInfo.appendChild(productFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

setProducts(productList);

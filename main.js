const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isshoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isshoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoshoppingCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Tan skin swimsuit",
  price: 100,
  image:
    "https://mipielcanela.com/cdn/shop/files/colombian-manufacturer-one-piece-medellin-bogota.jpg?v=1673476864",
});
productList.push({
  name: "Ivory white swimsuit",
  price: 200,
  image: "https://tendencybook.com/wp-content/uploads/2020/05/mitos-2.jpg",
});
productList.push({
  name: "Two pieces black",
  price: 1600,
  image:
    "https://img104.urbanic.com/goods-pic/0b70685db1ef402cadb118c002e29327_w1000_q90",
});
productList.push({
  name: "Two pieces white",
  price: 1500,
  image: "https://tendencybook.com/wp-content/uploads/2020/05/mitos-1.jpg",
});
productList.push({
  name: "two pieces blue waves",
  price: 300,
  image: "https://m.media-amazon.com/images/I/71je88S3ryL._AC_SL1500_.jpg",
});
productList.push({
  name: "strawberries",
  price: 2200,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_780908-MLA52848717715_122022-O.webp",
});
productList.push({
  name: "two piece print",
  price: 800,
  image:
    "https://www.glamesence.com/cdn/shop/products/29_1_1024x.png?v=1643741718",
});
productList.push({
  name: "bicolor",
  price: 600,
  image:
    "https://www.likeme.com.co/media/catalog/product/r/h/rh596086_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=400&canvas=400:600",
});
productList.push({
  name: "two pieces yellow",
  price: 900,
  image:
    "https://www.likeme.com.co/media/catalog/product/p/a/pacifika598573_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=400&canvas=400:600",
});

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

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
//Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
//El método appendChild se utiliza en el desarrollo web para agregar un nuevo elemento hijo a un elemento padre existente.
//Es comúnmente utilizado cuando se trabaja con el Modelo de Objetos del Documento (DOM) en JavaScript.

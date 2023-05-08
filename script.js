const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", toggleCarrito);

function openProductDetailAside() {
  productDetailContainer.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
}

function toggleDesktopMenu() {
  productDetailContainer.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleCarrito() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function closeProductDetail() {
  productDetailContainer.classList.toggle("inactive");
}

const productList = [];

productList.push(
  {
    name: "Iphone XR",
    price: 500000,
    image:
      "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/Apple_Iphone_XR_700x_2b0d3bfa-fb11-4129-a234-b4c07c3bb093.png?v=1665798616",
  },
  {
    name: "Bike",
    price: 12700,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Bicycle helmet",
    price: 1200,
    image:
      "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  },
  {
    name: "Bicycle helmet",
    price: 1600,
    image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
  },
  {
    name: "Bicycle helmet",
    price: 1500,
    image:
      "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  },
  {
    name: "Seat",
    price: 300,
    image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
  },
  {
    name: "Tennis Montain Bike",
    price: 2200,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
  },
  {
    name: "Sunglasses",
    price: 800,
    image:
      "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
  },
  {
    name: "Sunglasses",
    price: 600,
    image:
      "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
  },
  {
    name: "Bicycle seat bag",
    price: 876,
    image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
  }
);

productList.map((objeto) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const ProductImg = document.createElement("img");
  ProductImg.setAttribute("src", objeto.image);
  ProductImg.addEventListener("click", openProductDetailAside);

  const productDetailClose = document.querySelector(".product-detail-close");
  productDetailClose.addEventListener("click", closeProductDetail);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");
  const Prtoductprice = document.createElement("p");
  Prtoductprice.innerText = "$ " + objeto.price;
  const Prtoductname = document.createElement("p");
  Prtoductname.innerText = objeto.name;
  productInfoDiv.appendChild(Prtoductprice);
  productInfoDiv.appendChild(Prtoductname);

  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(ProductImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
});

let userMenuListener = document.querySelector("#user-menu");
let burgerButton = document.querySelector("#burger-button");
let cartButton = document.querySelector("#shopping-cart-button");
let closeMobileMenuBtn = document.querySelector("#close-mobile-menu");

let desktopMenu = document.querySelector("#desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let orderDetail = document.querySelector("#order-detail");
let cardsContainer = document.querySelector(".cards-container");

userMenuListener.addEventListener("click", toggleUserMenu);
burgerButton.addEventListener("click", toggleMobileMenu);
closeMobileMenuBtn.addEventListener("click", closeMobileMenu);
cartButton.addEventListener("click", toggleOrderDetail);

function toggleUserMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isOrderDetailOpen = !(orderDetail.classList.contains("inactive"));
  if (isOrderDetailOpen) {
    orderDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
function toggleOrderDetail() {
  const isDesktopMenuOpen = !(desktopMenu.classList.contains("inactive"));
  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }
  orderDetail.classList.toggle("inactive");
}
function closeMobileMenu() {
  mobileMenu.classList.add("inactive");
}

let productList = [];
productList.push({
  name: "Bicicleta",
  price: 180,
  img: "https://images.freeimages.com/images/large-previews/c86/old-bicycle-1412950.jpg",
});
productList.push({
  name: "Laptop",
  price: 750,
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00019555378368l.jpg",
});
productList.push({
  name: "Wallet",
  price: 20,
  img: "https://m.media-amazon.com/images/I/51cAjDb6RlL._AC_.jpg",
});
productList.push({
  name: "Xbox Series S",
  price: 350,
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088984265135l.jpg",
});
productList.push({
  name: "Skate",
  price: 27,
  img: "https://http2.mlstatic.com/D_NQ_NP_2X_760215-MLM54239398116_032023-F.webp",
});
productList.push({
  name: "Book Elon Musk",
  price: 30,
  img: "https://static01.nyt.com/images/2015/05/13/arts/13BOOKVANCE/13BOOKVANCE-superJumbo.jpg",
});
productList.push({
  name: "Silla oficina",
  price: 40,
  img: "https://http2.mlstatic.com/D_NQ_NP_2X_998014-MLM31226590805_062019-F.webp",
});
productList.push ({
  name: "Seat",
  price: 300,
  img: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg"
});
productList.push ({
    name: "Tennis Montain Bike",
    price: 2200,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg"
});
productList.push ({
    name: "Sunglasses",
    price: 800,
    img: "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602"
});

productList.push ({
  name: "Reloj inteligente",
  price: 1200,
  img: "https://m.media-amazon.com/images/I/61RXMQtXS+L._AC_SX679_.jpg"
});
productList.push ({
    name: "Mascarilla",
    price: 50,
    img: "https://m.media-amazon.com/images/I/61BNL2E7D-S._AC_SX679_.jpg"
});
productList.push ({
    name: "Auriculares inalámbricos",
    price: 900,
    img: "https://m.media-amazon.com/images/I/61hq2bkZvbL._AC_SY450_.jpg"
});

function renderCards(array){
  let allCards = "";
  for (product of array){
    allCards += `<div class="product-card">
      <img src="${product.img}" alt="">
      <div class="product-info">
        <div>
          <p>$${product.price}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>`;
  }
  cardsContainer.innerHTML = allCards;
}

renderCards(productList);
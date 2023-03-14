let userMenuListener = document.querySelector("#user-menu");
let burgerButton = document.querySelector("#burger-button");
let cartButton = document.querySelector("#shopping-cart-button");
let closeMobileMenuBtn = document.querySelector("#close-mobile-menu");
let backtoHomeBtn = document.querySelector("#back-to-home");

let desktopMenu = document.querySelector("#desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let orderDetail = document.querySelector("#order-detail");
let cardsContainer = document.querySelector(".cards-container");
let productCard = document.querySelector(".product-card");
let body = document.querySelector("body");

userMenuListener.addEventListener("click", toggleUserMenu);
burgerButton.addEventListener("click", toggleMobileMenu);
closeMobileMenuBtn.addEventListener("click", closeMobileMenu);
cartButton.addEventListener("click", toggleOrderDetail);
backtoHomeBtn.addEventListener("click", toggleOrderDetail);

function toggleUserMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isOrderDetailOpen = !(orderDetail.classList.contains("inactive"));
  let isThereActiveProduct = document.querySelectorAll("#product-detail").length > 0;

  if (isOrderDetailOpen) {
    orderDetail.classList.add("inactive");
  }
  if (isThereActiveProduct) {
    document.querySelectorAll("#product-detail").forEach((element) => { 
      element.remove();
    });
    cardsContainer.classList.remove("cards-container--aside-open");
  }
  mobileMenu.classList.toggle("inactive");
}
function toggleOrderDetail() {
  const isDesktopMenuOpen = !(desktopMenu.classList.contains("inactive"));
  let isThereActiveProduct = document.querySelectorAll("#product-detail").length > 0;

  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }
  if (isThereActiveProduct) {
    document.querySelectorAll("#product-detail").forEach((element) => { 
      element.remove();
    });
  }
  orderDetail.classList.toggle("inactive");
  if(orderDetail.classList.contains("inactive")){
    cardsContainer.classList.remove("cards-container--aside-open");
  }
}
function closeMobileMenu() {
  mobileMenu.classList.add("inactive");
}

let productList = [];
productList.push({
  name: "Bicicleta",
  price: 180,
  img: "https://images.freeimages.com/images/large-previews/c86/old-bicycle-1412950.jpg",
  description: "Bicicleta vintage en buen estado ideal para paseos en familia."
});

productList.push({
  name: "Laptop",
  price: 750,
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00019555378368l.jpg",
  description: "Laptop nueva de última generación, Ficha tecnica: (Intel I5, 16gb RAM, 1650ti)."
});

productList.push({
  name: "Wallet",
  price: 20,
  img: "https://m.media-amazon.com/images/I/51cAjDb6RlL._AC_.jpg",
  description: "Cartera minimalista de cuero, con espacio suficiente para guardar tus tarjetas y billetes de manera organizada."
});

productList.push({
  name: "Xbox Series S",
  price: 350,
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088984265135l.jpg",
  description: "Consola de videojuegos de última generación, juega a alta resolucion hasta 60fps."
});

productList.push({
  name: "Skate",
  price: 27,
  img: "https://http2.mlstatic.com/D_NQ_NP_2X_760215-MLM54239398116_032023-F.webp",
  description: "Skate en buen estado"
});

productList.push({
  name: "Book Elon Musk",
  price: 30,
  img: "https://static01.nyt.com/images/2015/05/13/arts/13BOOKVANCE/13BOOKVANCE-superJumbo.jpg",
  description: "Libro biográfico de Elon Musk"
});

productList.push({
  name: "Silla oficina",
  price: 40,
  img: "https://http2.mlstatic.com/D_NQ_NP_2X_998014-MLM31226590805_062019-F.webp",
  description: "Silla giratoria para oficina"
});

productList.push ({
  name: "Seat",
  price: 300,
  img: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
  description: "Asiento de coche para bebé"
});

productList.push ({
    name: "Tennis Montain Bike",
    price: 2200,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
    description: "Zapatillas para bicicleta de montaña"
});

productList.push ({
    name: "Sunglasses",
    price: 800,
    img: "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
    description: "Gafas de sol polarizadas"
});

productList.push ({
  name: "Reloj inteligente",
  price: 1200,
  img: "https://m.media-amazon.com/images/I/61RXMQtXS+L._AC_SX679_.jpg",
  description: "Monitorea: ritmo cardiaca, cuenta pasos, actividad física, monitor de sueño."
});
productList.push ({
    name: "Mascarilla",
    price: 50,
    img: "https://m.media-amazon.com/images/I/61BNL2E7D-S._AC_SX679_.jpg",
    description: "Fabricada con materiales UA de alto rendimiento, diseñada para usarse todo el día y para hacer deporte"

});
productList.push ({
    name: "Auriculares inalámbricos",
    price: 900,
    img: "https://m.media-amazon.com/images/I/61hq2bkZvbL._AC_SY450_.jpg",
    description: "Dispone de una batería de larga duración en una sola carga para disfrutar de ellos al máximo. Además cuenta con estuche de carga USB C"
});

function renderCards(array){
  for (let product of array){
    // <div class="product-card" onclick="showProductDetail(console.log(product))"></div>
    let productCard = document.createElement("div");
    productCard.classList.add("product-card");
    // productCard.dataset.index = "0";
    productCard.onclick  =  function () { showProductDetail(product); };
    
    

    const dataCard = `<img src="${product.img}" alt="${product.name}" id="product-card__img">
      <div class="product-info">
        <div>
          <p>$${product.price}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>`;
    
    productCard.innerHTML = dataCard;
    cardsContainer.append(productCard);
  }
}
function showProductDetail(product){
  let isThereActiveProduct = document.querySelectorAll("#product-detail").length > 0;
  if(isThereActiveProduct){
    document.querySelectorAll("#product-detail").forEach((element) => { 
      element.remove();
    });
  }


  let productResume = document.createElement("aside");
  productResume.id = "product-detail";
  productResume.classList.add("aside-content", "product-detail");

 productResume.innerHTML = `<div class="product-detail-close" id="product-detail__close" onclick="removeProductDetail()">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="${product.img}" alt="${product.name}">
    <div class="product-info product-info-cart">
      <p>$${product.price}</p>
      <p>${product.name}</p>
      <p>${product.description}</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>`;
  if(window.innerWidth > 992){
    cardsContainer.classList.add("cards-container--aside-open");
  } else{
    body.classList.add("no-scroll");
  }
  body.append(productResume);

}
function removeProductDetail(){
  let productResume = document.querySelector("#product-detail");
  productResume.remove();
  cardsContainer.classList.remove("cards-container--aside-open");
}

renderCards(productList);
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
let orderContainer = document.querySelector(".my-order-content");

let shopingCart = [];

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
  if(window.innerWidth <= 992){
    body.classList.toggle("no-scroll");
  }
}
function closeMobileMenu() {
  mobileMenu.classList.add("inactive");
}

let productList = [];
productList.push({
  name: "Bicicleta",
  price: 180,
  img: "./img/bicicleta-vintage.png",
  category: "others",
  description: "Bicicleta vintage en buen estado ideal para paseos en familia."
});

productList.push({
  name: "Laptop",
  price: 750,
  img: "./img/asus-laptop.png",
  category: "electronics",
  description: "Laptop nueva de última generación, Ficha tecnica: (Intel I5, 16gb RAM, 1650ti)."
});

productList.push({
  name: "Wallet",
  price: 20,
  img: "https://m.media-amazon.com/images/I/51cAjDb6RlL._AC_.jpg",
  category: "clothes",
  description: "Cartera minimalista de cuero, con espacio suficiente para guardar tus tarjetas y billetes de manera organizada."
});

productList.push({
  name: "Xbox Series S",
  price: 350,
  img: "./img/series-s.png",
  category: "electronics",
  description: "Consola de videojuegos de última generación, juega a alta resolucion hasta 60fps."
});

productList.push({
  name: "Hasbro - Nerf Elite",
  price: 12,
  img: "./img/lanzador-nerf.png",
  category: "toys",
  description: "Lanzador de Juguete, Incluye 1 Lanzador Adaptable con Tambor de 6 con 12 Dardos e Instrucciones para Niños y Niñas a Partir 8+ Años"
});

productList.push({
  name: "Skate",
  price: 27,
  img: "./img/skate.png",
  category: "others",
  description: "Skate en buen estado"
});

productList.push({
  name: "Book Elon Musk",
  price: 30,
  img: "./img/elon-book.png",
  category: "others",
  description: "Libro biográfico de Elon Musk"
});

productList.push({
  name: "Silla oficina",
  price: 40,
  img: "./img/silla-oficina.png",
  category: "furnitures",
  description: "Silla giratoria para oficina"
});

productList.push ({
    name: "Tennis Montain Bike",
    price: 2200,
    img: "./img/tennis-bike.png",
    category: "clothes",
    description: "Zapatillas para bicicleta de montaña"
});

productList.push ({
    name: "Sunglasses",
    price: 800,
    img: "./img/sunglasses.png",
    category: "clothes",
    description: "Gafas de sol polarizadas"
});

productList.push ({
  name: "Reloj inteligente",
  price: 1200,
  img: "./img/smart-band.png",
  category: "electronics",
  description: "Monitorea: ritmo cardiaca, cuenta pasos, actividad física, monitor de sueño."
});
productList.push ({
    name: "Mascarilla",
    price: 50,
    img: "./img/mascarilla.png",
    category: "clothes",
    description: "Fabricada con materiales UA de alto rendimiento, diseñada para usarse todo el día y para hacer deporte"

});
productList.push ({
    name: "Auriculares inalámbricos",
    price: 900,
    img: "./img/audifonos-inalambricos.png",
    category: "electronics",
    description: "Dispone de una batería de larga duración en una sola carga para disfrutar de ellos al máximo. Además cuenta con estuche de carga USB C"
});

function renderCards(array){
  for (let product of array){
    let productCard = document.createElement("div"); // Card conntainer 
    productCard.classList.add("product-card");

    let productCardImage = document.createElement("img"); //Image of card
    productCardImage.src = product.img;
    productCardImage.alt = product.img;
    productCardImage.id = "product-card__img";
    productCardImage.onclick = function () { showProductDetail(product); };
    
    let productCardInfo = document.createElement("div");
    productCardInfo.classList.add("product-info");
    productCardInfo.innerHTML = `<div>
                                  <p>$${product.price}</p>
                                  <p>${product.name}</p>
                                </div>`;

    let figureAddToCart = document.createElement("figure");
    figureAddToCart. innerHTML = `<img src="./icons/bt_add_to_cart.svg" alt="" class='add-to-cart'> <span class="item-to-cart">+1</span>`;
    figureAddToCart.onclick = function () { addToShopingCart(product, figureAddToCart); }

    productCardInfo.append(figureAddToCart);
    productCard.append(productCardImage);
    productCard.append(productCardInfo);
    
    cardsContainer.append(productCard);
  }
}

function renderProductsListOfCart(){
  orderContainer.innerHTML = "";
  let productosAgrupados = [];
  let auxShopingCart = shopingCart;

  while(auxShopingCart.length > 0){

    let grupo = auxShopingCart.filter((product) => {
      return product.name === auxShopingCart[0].name;
    });

    productosAgrupados.push(grupo);
    
    auxShopingCart = auxShopingCart.filter((product) => {
      return product.name !== grupo[0].name;
    });
  }

  productosAgrupados.forEach((grupoDeArticulos) => {
    let subTotalArticulo = 0;
    let numeroDeArticulos = 0;
    let precioArticulo = grupoDeArticulos[0].price;
    let nombreArticulo = grupoDeArticulos[0].name;
    let imagenArticulo = grupoDeArticulos[0].img;

    for(articulo of grupoDeArticulos){
      subTotalArticulo += articulo.price;
      numeroDeArticulos++;
    }

    let productInCart = document.createElement("div");
    productInCart.classList.add("shopping-cart");
    productInCart.innerHTML = 
        `<figure>
          <img
            src="${imagenArticulo}"
            alt="${nombreArticulo}">
        </figure>
        <p>${nombreArticulo}</p>
        <p class="shopping-cart__price">($${precioArticulo} x ${numeroDeArticulos}) $${subTotalArticulo}</p>
        <img src="./icons/icon_close.png" alt="close">`

    orderContainer.appendChild(productInCart);
  });
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
  </div>`;

  let productCardImage = document.createElement("img");
  productCardImage.classList.add("product-card__image");
  productCardImage.src = product.img;
  productCardImage.alt = product.name;
  
  let productCardInfo = document.createElement("div");
  productCardInfo.classList.add("product-info", "product-info-cart");
  productCardInfo.innerHTML = `<p>$${product.price}</p>
                               <p>${product.name}</p>
                               <p>${product.description}</p>`;

  let productCartBtn = document.createElement("button");
  productCartBtn.classList.add("primary-button", "add-to-cart-button");
  productCartBtn.onclick = function (){ addToShopingCart(product, productCartBtn); };
  productCartBtn.innerHTML = `<img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                              <p>Add to cart</p>
                              <span class="item-to-cart">+1</span>`;

  productResume.append(productCardImage, productCardInfo, productCartBtn);

  if(window.innerWidth > 992){
    cardsContainer.classList.add("cards-container--aside-open");
  } else{
    body.classList.add("no-scroll");
  }
  body.append(productResume);
  
}


function removeProductDetail(){
  body.classList.remove("no-scroll");
  
  let productResume = document.querySelector("#product-detail");
  productResume.remove();
  cardsContainer.classList.remove("cards-container--aside-open");
}


function filterProducts(category, itemSelected){
  let allAnchorElements = Array.from(document.querySelectorAll("a"));

  let itemsBothMenus = allAnchorElements.filter((item) => {
    return item.classList.contains("item");
  });

  itemsBothMenus.forEach((item) => {
    if(item.classList.contains("item-active")){
      item.classList.remove("item-active");
    }
  });

  itemsBothMenus.forEach((item) => {
    if(item.textContent === itemSelected.textContent){
      item.classList.add("item-active")
    }
  });
  
  
  cardsContainer.innerHTML = "";

  if(category === "all"){
    renderCards(productList);
    return;
  }

  let resultProducts = productList.filter((product) => {
    return product.category == category;
  });

  renderCards(resultProducts);
}

function removeNoScroll() {
  let isThereActiveProduct = document.querySelectorAll("#product-detail").length > 0;

  if(window.innerWidth > 992){
    body.classList.remove("no-scroll");
  } else if (isThereActiveProduct){
    body.classList.add("no-scroll");
    cardsContainer.classList.remove("cards-container--aside-open");

  }

  if(isThereActiveProduct && window.innerWidth > 992){
    cardsContainer.classList.add("cards-container--aside-open");
  }
}

function addToShopingCart(product, figureAddToCart){
  let isThereActiveProduct = document.querySelectorAll("#product-detail").length > 0;
  let itemToCart = figureAddToCart.lastElementChild;


  itemToCart.classList.add("to-cart-animation");

  setTimeout(() => {
    itemToCart.classList.remove("to-cart-animation");
  }, 400);

  shopingCart.push(product);
  refreshCounter(1);
  renderProductsListOfCart();
  refreshOrderTotal();
}

function refreshCounter(add){
  let itemsCounter = document.querySelector("#items-counter");
  
  if(parseInt(shopingCart.length) === 0){
    itemsCounter.classList.add("inactive");
  } else{
    itemsCounter.classList.remove("inactive");
  }

  itemsCounter.innerHTML = shopingCart.length;
}
function refreshOrderTotal(){
  let orderTotal = document.querySelector("#order-total");
  let total = 0;
  shopingCart.forEach((product) =>{
    total += product.price;
  });

  orderTotal.innerHTML = `$${total}`;
}

renderCards(productList);
renderProductsListOfCart();
refreshCounter();
refreshOrderTotal();
window.onresize = removeNoScroll;

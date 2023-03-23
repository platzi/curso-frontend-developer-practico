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
    // <div class="product-card" onclick="showProductDetail(console.log(product))"></div>
    let productCard = document.createElement("div");
    productCard.classList.add("product-card");
    // productCard.dataset.index = "0";
    productCard.onclick  =  function () { showProductDetail(product); };
    
    
    
    const dataCard = `<img class="product-card__image" src="${product.img}" alt="${product.name}" id="product-card__img">
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
  <img class="product-card__image" src="${product.img}" alt="${product.name}">
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

renderCards(productList);

window.onresize = removeNoScroll;
//Alamacenamos en constantes las clases de las etiquetas le daremos una funcionalidad
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const carritoMenu = document.querySelector(".navbar-shopping-cart");

const burgerMob = document.querySelector(".menu");
const mobMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#product-detail");
const cardsContainer = document.querySelector(".cards-container");
const closeDetail = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMob.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleCarritoMenu);
closeDetail.addEventListener("click", closeDetailProduct);

// Funciones con las cuales intereactuaran los clicks
function toggleDesktopMenu() {
  productDetailContainer.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive"); //Agrega la clase "inactive" al elemento
  desktopMenu.classList.toggle("inactive"); //Agrega el cambio de un estado a otro del elemento
}

function toggleMobileMenu() {
  productDetailContainer.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  mobMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
  productDetailContainer.classList.add("inactive");
  mobMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");
}
function openDetailProduct() {
  mobMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeDetailProduct() {
  productDetailContainer.classList.add("inactive");
}

//Creamos lista de productos "vacia"

const productList = [];

// Agregamos productos a la lista

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Cell",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "PS5",
  price: 500,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="">
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
  // Recorremos cada producto de la lista con el ciclo For Of
  for (let product of arr) {
    // Creamos una etiqueta div y almacenamos en una constante
    const productCard = document.createElement("div");
    //Agregamos una clase al div creado y almacenado en la constante
    productCard.classList.add("product-card");

    // Creamos una etiqueta img y almacenamos en una constante
    const img = document.createElement("img");

    //Modificamos el src de la etiqueta img creada y almacenado en la constante
    img.setAttribute("src", product.image);
    img.addEventListener("click", openDetailProduct);

    // Creamos una etiqueta div y almacenamos en una constante
    const productInfo = document.createElement("div");

    //Agregamos una clase al div creado y almacenado en la constante
    productInfo.classList.add("product-info");

    // Creamos una etiqueta div y almacenamos en una constante
    const productInfoDiv = document.createElement("div");

    // Creamos una etiqueta p y almacenamos en una constante
    const productPrice = document.createElement("p");
    //Modificamos el contenido de la etiqueta p creada y alamacenada en constante

    productPrice.innerHTML = `$ ${product.price}`;
    // Creamos una etiqueta p y almacenamos en una constante
    const productName = document.createElement("p");
    //Modificamos el contenido de la etiqueta p creada y alamacenada en constante

    productName.innerHTML = `${product.name}`;

    //Agregamos nodos a la constante
    productInfoDiv.append(productPrice, productName);

    // Creamos una etiqueta figure y almacenamos en una constante
    const productInfoFigure = document.createElement("figure");
    // Creamos una etiqueta img y almacenamos en una constante
    const imgFigure = document.createElement("img");
    //Modificamos el src de la etiqueta img creada y almacenado en la constante

    imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //Agregamos nodos a la constante
    productInfoFigure.append(imgFigure);
    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(img, productInfo);
    cardsContainer.appendChild(productCard);
  }
}

//Llamamos a la funcion pasando un parametro
renderProducts(productList);

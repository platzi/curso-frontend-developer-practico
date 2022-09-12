//SELECCIONAR EL CARDS-CONTAINER
const cardsContainer = document.querySelector(".cards-container");
// MENÚ DESKTOP
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// MENÚ ICON BURGER
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//MENÚ SHOPPING CAR
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const shoppingCarContainer = document.querySelector("#shoppingCarContainer");
//PRODUCT DETAIL CONTAINER
const productDetailContainer = document.querySelector("#productDetail")
const productDetailClosedIcon = document.querySelector(".product-detail-close")

//ADDEVENTLISTENER
navbarEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCar.addEventListener("click", toggleCarAside);
productDetailClosedIcon.addEventListener("click", closeProductDetailAside)

//FUNCIONES ACCIONES DEL LISTENER
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCarContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive")

}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCarContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive")
}

function toggleCarAside() {
  shoppingCarContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive")
}

function openProductDetailAside(){
  productDetailContainer.classList.remove("inactive")
  

}

function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive")
}

//ARRAY DE PRODUCTOS PARA MOSTRAR EN VENTANA
const productList = [];
productList.push(
  {
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Motorciclye",
    price: 1220,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Car",
    price: 120000,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }
);

function renderProducts(arr){
  // ITERACIÓN PARA CADA UNO DE LOS ELEMENTOS DEL ARRAY
  for (product of arr) {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("product-card"); //Agregar una class a la eti
    const imgProductCard = document.createElement("img");
    imgProductCard.setAttribute("src", product.image);
    imgProductCard.addEventListener("click", openProductDetailAside)

    const infoProduct = document.createElement("div");
    infoProduct.classList.add("product-info");
  
    const infoDivDetails = document.createElement("div");
    const priceProduct = document.createElement("p");
    const nameProduct = document.createElement("p");
    priceProduct.innerText = "$" + product.price;
    nameProduct.innerText = product.name;
  
    const figureProduct = document.createElement("figure");
    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    //Agregamos los hijos a cada etiqueta
    figureProduct.appendChild(imgProduct);
    infoDivDetails.appendChild(priceProduct);
    infoDivDetails.appendChild(nameProduct);
    infoProduct.appendChild(infoDivDetails);
    infoProduct.appendChild(figureProduct);
    cardProduct.appendChild(imgProductCard);
    cardProduct.appendChild(infoProduct);
    cardsContainer.appendChild(cardProduct)
  }
}

renderProducts(productList)

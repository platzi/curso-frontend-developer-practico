//Variables constantes

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".navbar-shopping-cart");
const asidedetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

//Email Menu
menuEmail.addEventListener("click", menuToggle);
function menuToggle() {
  desktopMenu.classList.toggle("inactive");
}

//burger Menu
menuBurger.addEventListener("click", menuToggleMobile);
function menuToggleMobile() {
  const carritoStatus = asidedetail.classList.contains("inactive");
  if (!carritoStatus) {
    asidedetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

// Aside mobile

aside.addEventListener("click", menuAside);
function menuAside() {
  const burgerStatus = mobileMenu.classList.contains("inactive");
  if (!burgerStatus) {
    mobileMenu.classList.add("inactive");
  }
  asidedetail.classList.toggle("inactive");
}

// <div class="product-card">
//           <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//           <div class="product-info">
//             <div>
//               <p>$120,00</p>
//               <p>Bike</p>
//             </div>
//             <figure>
//               <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//           </div>
//         </div>
const productList = [];
productList.push({
  nombre: "Bike",
  price: 120,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  nombre: "Pantalla",
  price: 220,
  imagen:
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  nombre: "Platillo Volador",
  price: 220,
  imagen:
    "https://images.pexels.com/photos/9271471/pexels-photo-9271471.jpeg?auto=compress&cs=tinysrgb&w=600",
});
function renderDisplay(arr){for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");


//Imagen que cambia con el elemento
  const ProductImg = document.createElement("img");
  ProductImg.setAttribute("src", product.imagen);

//product-info
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  

  //Div Contenedor!.
  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
  const productName = document.createElement("div");
  productName.innerText = product.nombre;
  productInfoDiv.append(productPrice, productName);

//Imagen que se repite
  const productInfoFigure = document.createElement("figure");
  const productImgCard=document.createElement('img');
  productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
  productInfoFigure.append(productImgCard);

  //Uniendo Todo en producto-info
  productInfo.append(productInfoDiv, productInfoFigure);

  //uniendo Global
  productCard.append(ProductImg,productInfo)
  //Append del producto maquetado
  cardsContainer.appendChild(productCard);

}};
renderDisplay(productList);


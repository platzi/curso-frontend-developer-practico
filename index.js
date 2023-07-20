const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMovil = document.querySelector(".mobile-menu");
const menuAmburgeza = document.querySelector(".menu");
const carritoCon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleMenu);
menuAmburgeza.addEventListener("click", toggleMenuAmburgeza);
carritoCon.addEventListener("click", toggleMenuCon);

/*menu desplegable email*/
function toggleMenu() {
  menuMovil.classList.toggle("inactivo");
  const isMenuEmail = shoppingCartContainer.classList.contains("inactivo");
  if (!isMenuEmail) {
    shoppingCartContainer.classList.add("inactivo");
  }
  desktopMenu.classList.toggle("inactivo");
}
/*menu desplegable */
function toggleMenuAmburgeza() {
  const isMenuCon = shoppingCartContainer.classList.contains("inactivo");

  if (!isMenuCon) {
    shoppingCartContainer.classList.add("inactivo");
  }
  menuMovil.classList.toggle("inactivo");
}
/*menu desplegable carrito */
function toggleMenuCon() {
  const isMenuMovil = menuMovil.classList.contains("inactivo");
  const isMenuEmailC = desktopMenu.classList.contains("inactivo");

  if (!isMenuMovil || !isMenuEmailC) {
    menuMovil.classList.add("inactivo");
    desktopMenu.classList.add("inactivo");
  }

  shoppingCartContainer.classList.toggle("inactivo");
}

/* productos */
const producList = [];
producList.push({
  nombre: "bike",
  precio: 120,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producList.push({
  nombre: "Patalla",
  precio: 330,
  imagen:
    "https://i.blogs.es/3d84dd/captura-de-pantalla-2022-12-21-a-las-11.53.43/1366_2000.jpeg",
});

producList.push({
  nombre: "Pc",
  precio: 690,
  imagen:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVI808cZU_fiRi5ztGpiL6bOUYWHeRwIOhw&usqp=CAU",
});

/*
<div class="product-card">
         <img
           src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           alt=""
           >
         <div class="product-info">
           <div>
             <p>$120,00</p>
             <p>Bike</p>
           </div>
           <figure>
             <img src="./icons/bt_add_to_cart.svg" alt="">
           </figure>
         </div>
  </div>
*/

for (product of producList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productimg = document.createElement("img");
  productimg.setAttribute("src", product.imagen);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");
  const productPrecio = document.createElement("p");
  productPrecio.innerText = "$" + product.precio;
  const productNombre = document.createElement("p");
  productNombre.innerText = product.nombre;

  productInfoDiv.appendChild(productPrecio);
  productInfoDiv.appendChild(productNombre);

  const productFigure = document.createElement("figure");
  const figureimg = document.createElement("img");
  figureimg.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productFigure.appendChild(figureimg);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productFigure);

  productCard.appendChild(productimg);
  productCard.appendChild(productInfo);

  cardContainer.appendChild(productCard);
}

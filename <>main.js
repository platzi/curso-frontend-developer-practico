const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenuIco = document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const menuCarritoIco = document.querySelector(".navbar-shopping-cart");
const carritoDetalle = document.querySelector("#shoppingCarContainer");
const cardsContainer = document.querySelector(".cards-container");

/* menu interactivo Email */
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenuIco.addEventListener("click", toggleMovilMenu);
menuCarritoIco.addEventListener("click", toggleCarrito);

function toggleDesktopMenu() {
  const isCarritoDetalle = carritoDetalle.classList.contains("inactivo");
  if (!isCarritoDetalle) {
    carritoDetalle.classList.add("inactivo");
  }

  console.log("Click");
  desktopMenu.classList.toggle("inactivo");
}
/* muestra las imagenes de los productos de manera dinamica y se utilizara hasta ser invocada */
function renderProducts(arreglo) {
  for (product of arreglo) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {nombre, precio,imagen} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$" + product.precio;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

console.log("js funcionando");

/* menu movil */
function toggleMovilMenu() {
  const isCarritoDetalle = carritoDetalle.classList.contains("inactivo");
  if (!isCarritoDetalle) {
    carritoDetalle.classList.add("inactivo");
  }
  menuMovil.classList.toggle("inactivo");
}

function toggleCarrito() {
  const isMenuMovilclosed = menuMovil.classList.contains("inactivo");
  const isMenuDesktopClosed = desktopMenu.classList.contains("inactivo");
  if (!isMenuMovilclosed || !isMenuDesktopClosed) {
    menuMovil.classList.add("inactivo");
    desktopMenu.classList.add("inactivo");
  }
  carritoDetalle.classList.toggle("inactivo");
}

const productList = [];
productList.push({
  name: "Bici",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  precio: 220,
  image:
    "https://cdni.russiatoday.com/actualidad/public_images/5b0/5b09719338f07164d4d9781d7edd7f0e_article.jpg",
});
productList.push({
  name: "CPU",
  precio: 500,
  image:
    "https://loopulo.com/wp-content/uploads/2020/10/modding-san-miguel-ordenador-inspirado-fabrica-futurista-cerveza-loopulo-00.jpg",
});
productList.push({
  name: "Silla Gamer",
  precio: 350,
  image:
    "https://dlcdnimgs.asus.com/websites/global/products/lfuhfxz4b9lmxdqm/img/main/bg-07-m.jpg",
});

/* muestra las imagenes de los productos de manera dinamica y se utilizara hasta ser invocada */
function renderProducts(arreglo) {
  for (product of arreglo) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {nombre, precio,imagen} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$" + product.precio;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
/*             <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
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

renderProducts(productList);

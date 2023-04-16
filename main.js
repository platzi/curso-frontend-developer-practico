// js del login

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamborguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
// carrito de compras
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

//crear las clases de los productos
const cardContainer = document.querySelector(".cards-container");
const mainContainer = document.querySelector(".main-container");

// menu de login
menuEmail.addEventListener("click", toggleDesktopMenu);
// menu amburguesa
hamborguerMenuIcon.addEventListener("click", toggleMenuMobile);
//menu carrito aside
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideMenuClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isAsideMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
    //en este if se pregunta si mobile menu esta abierto si es verdad lo pone como inactivo
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  const isAsideMenuClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isAsideMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
    //en este if se pregunta si mobile menu esta abierto si es verdad lo pone como inactivo
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isdesktopMenu = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed || !isdesktopMenu) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    //en este if se pregunta si mobile menu esta abierto si es verdad lo pone como inactivo
  }
  shoppingCartContainer.classList.toggle("inactive");
}

// para agregar productos de manera mas facil y no terer html en exeso
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "PC",
  price: 1500,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "PC",
  price: 1500,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*div class="product-card">
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
          </div>
        </div>
        
        CREACION DE LOS BLOQUES DE HTML DE MANERA DINAMICA*/

// PARA PODER AUTOMATIZAR TODO EL CODIGO DEL FOR PODEMOS METERLO DENTRO DE UNA FUNCION

/*COMANDOS GIT A RECORDAR
git status -> ver el estado de los archivos
git add -A -> añadir todo los archivos
git commit - m "comentario" -> para subirlos
git push -> subir los archivos a nuetro gitup

*/

function rederProducts(arr) {
  for (product of arr) {
    // crea elementos uno por uno
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}

rederProducts(productList);

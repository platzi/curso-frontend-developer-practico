/* selectores */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart"); //carrito de compra
const shoppingCartContainer = document.querySelector("#shoppingCartContainer"); //carrito de compra

const cardsContainer = document.querySelector(`.cards-container`);

const productDetailContainer = document.querySelector("#productDetail"); //carrito de compra

const productDetailCloseIcon = document.querySelector(".product-detail-close");

const myOrderClosed = document.querySelector(".title-container");

/* eventos---- */
menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobileMenu);

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

myOrderClosed.addEventListener("click", closetMyOrder);

/* funcion---- */
function toggleDesktopMenu() {
  const carritoClosod = shoppingCartContainer.classList.contains("inactive");
  if (!carritoClosod) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");

  closeProductDetailAside();
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); //si no tiene la classe inactive

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
    return;
  }

  const compuClosed = desktopMenu.classList.contains("inactive");

  if (!compuClosed) {
    desktopMenu.classList.add("inactive");
  }

  const isProductDetailClose =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClose) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive"); //agrega la clase
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");

  productDetailContainer.classList.remove("inactive"); //eliminar la clase inactive
  desktopMenu.classList.add("inactive");

  mobileMenu.classList.add("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive"); //agregar la clase inactive

  /* const isCarritoProductClose =
    shoppingCartContainer.classList.contains("inactive");

  if (!isCarritoProductClose) {
    shoppingCartContainer.classList.add("inactive");
  } este fue una pruva que funciona pero el profe lo simplifico */
}

function closetMyOrder() {
  shoppingCartContainer.classList.add("inactive");
}

/* img-productos-------------- */
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "laptop",
  price: 220,
  image:
    "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
});

productList.push({
  name: "mochila",
  price: 150,
  image:
    "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
});
productList.push({
  name: "PlayStation",
  price: 80,
  image:
    "https://images.unsplash.com/photo-1632803227975-b6a5688c9c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
});
productList.push({
  name: "Reloj",
  price: 300,
  image:
    "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
});
productList.push({
  name: "Pelota",
  price: 50,
  image:
    "https://images.unsplash.com/photo-1625187538367-6a8483a79cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80",
});
productList.push({
  name: "Bufanda",
  price: 90,
  image:
    "https://images.unsplash.com/photo-1623832101624-ecd47c803527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
});
productList.push({
  name: "Sapatillas",
  price: 450,
  image:
    "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
});

/*  <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>  */

/* funcion para agregar elementos al HTML desde JS */
function renderProducts(arr) {
  for (product of arr) {
    /* crear los elementos */
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$ ${product.price}`;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");

    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    /*agregar los elementos, agregar una etiqueta dentro de otra etiqueta*/
    productInfoFigure.appendChild(productImgCard);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoFigure);
    productInfo.appendChild(productInfoDiv);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);

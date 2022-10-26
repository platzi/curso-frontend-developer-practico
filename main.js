const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const shopingCartContainer = document.querySelector("#shoping-cart-container");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleAsideCart);
productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  /*Cerrar el shopingCartContainer si el desktopMenu esta abierto*/
  shopingCartContainer.classList.add("inactive");
  /*Cerrar el productDetailContainer si el desktopMenu esta abierto*/
  productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  /*Cerrar el Cart si el mobileMenu esta abierto*/
  shopingCartContainer.classList.add("inactive");
  /*Cerrar el productDetailContainer si el mobileMenu esta abierto*/
  productDetailContainer.classList.add("inactive");
}

function toggleAsideCart() {
  shopingCartContainer.classList.toggle("inactive");
  /*Cerrar el desktopMenu si el shopingCartContainer esta abierto*/
  desktopMenu.classList.add("inactive");
  /*Cerrar el productDetailContainer si el shopingCartContainer esta abierto*/
  productDetailContainer.classList.add("inactive");
  /*Cerrar el mobileMenu si el shopingCartContainer esta abierto*/
  mobileMenu.classList.add("inactive");
}

function openProductDetailAside() {
  /*Abrir el productDetailContainer*/
  productDetailContainer.classList.remove("inactive");
  /*Cerrar el shopingCartContainer si el productDetailContainer esta abierto*/
  shopingCartContainer.classList.add("inactive");
  /*Cerrar el desktopMenu si el productDetailContainer esta abierto*/
  desktopMenu.classList.add("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 150,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*
<div class="product-card">
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
          </div>
        </div>
*/

/*Maquetación del div card-container*/
function renderProducts(arr) {
  for (product of arr) {
    /*Creación del div product-card*/
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    /*Creación del img*/
    const ProductImg = document.createElement("img");
    ProductImg.setAttribute("src", product.image);
    ProductImg.addEventListener("click", openProductDetailAside);

    /*Creación del div product-info*/
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    /*Creación del div para precio y nombre*/
    const productInfoDiv = document.createElement("div");

    /*Creación del p para precio*/
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    /*Creación del p para nombre*/
    const productName = document.createElement("p");
    productName.innerText = product.name;

    /*Agregando div de precio y nombre dentro de producto-info*/
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    /*Agregando img dentro del figure*/
    productInfoFigure.appendChild(productImgCart);

    /*Agregando div de precio, nombre y figure dentro del producto-info*/
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    /*Agregando imagen del producto y prodcuct-info dentro de product-card*/
    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);

    /*Agrgando todo product-card dentro de card-container*/
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);

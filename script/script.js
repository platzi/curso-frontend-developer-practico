const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarIcon = document.querySelector(`.navbar-shopping-cart`);
const productDetailCloseIcon = document.querySelector(`.product-detail-close`);
const footerCart = document.querySelector("#footer-cart");
const mobileMenu = document.querySelector(`.mobile-menu`);
const shoppingCartContainer = document.querySelector(`#shoppingCartContainer`);
const montoTotal = document.querySelector("#total");
const cardsContainer = document.querySelector(`.cards-container`);
const productDetailContainer = document.querySelector(`#productDetail`);
const myOrderContent = document.querySelector(`.my-order-content`);
const contadorCarrito = document.querySelector("#cantidad-carrito");
const containPriCant = document.querySelector(".containCov");
const mainContainer = document.querySelector(".main-container");
const containProductDetail = document.querySelector("#contain-product");
let carrito = [];

let url = "http://localhost:3050/productList";

const getAll = async () => {
  try {
    let res = await fetch(url),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    console.log(json);
    json.forEach((el) => {
      productList(el);
    });
  } catch (error) {
    let message = error.statusText || "Ocurrio un error";
    console.log(message, error.status);
    // mainContainer.insertAdjacentHTML(`<h2><b>Error ${error.status}: ${message}</b></h2>`);
  }
};

document.addEventListener("DOMContentLoaded", getAll);

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  productoEnCarrito();
});

nav_email.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarIcon.addEventListener(`click`, toggleCarAside);
containProductDetail.addEventListener(`click`, closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  }

  desktopMenu.classList.toggle(`inactive`);

  // const iscontainProductDetail =
  //   containProductDetail.classList.add(`inactive`);
}

function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle(`inactive`);
}

function toggleCarAside() {
  pintarFooter();
  const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add(`inactive`);
  }

  const isProductDetailClosed =
    containProductDetail.classList.contains(`inactive`);

  if (!isProductDetailClosed) {
    containProductDetail.classList.add(`inactive`);
  }

  shoppingCartContainer.classList.toggle(`inactive`);
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add(`inactive`);
  containProductDetail.classList.remove(`inactive`);

  desktopMenu.classList.add(`inactive`);
}

function closeProductDetailAside() {
  containProductDetail.classList.add(`inactive`);
}



function productList(el) {
  cardsContainer.innerHTML += `
   <div class="product-card">
  <img src=${el.image} alt=${el.name} />
  <div class="product-info">
    <div>
      <p>$${el.price}</p>
      <p>${el.name}</p>
    </div>
    <figure>
      <img id=${el.id} src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
`;
}

cardsContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  if(e.target.id){
    addToCart()
  }
});

function addToCart(id) {
  const existe = carrito.some((prod) => prod.id === id);

  if (existe) {
    const newProduct = carrito.some((prod) => {
      if (prod.id === id) {
        prod.cantidad++;
        // productoEnCarrito();
      }
    });
    return newProduct;
  } else {
    carrito.push(existe);
  }

  productoEnCarrito();
}

function productoEnCarrito() {
  const orderContainer = document.createElement(`div`);
  orderContainer.classList.add(`my-order-content`);
  myOrderContent.innerHTML = "";
  pintarFooter();

  carrito.forEach((product) => {
    const shoppingCart = document.createElement(`div`);
    shoppingCart.classList.add(
      `shopping-cart`,
      "m-0",
      "justify-content-between"
    );

    const figureContainerCart = document.createElement(`figure`);
    const imgFigureCart = document.createElement(`img`);
    imgFigureCart.setAttribute(`src`, product.image);
    imgFigureCart.addEventListener(`click`, toggleCarAside);

    figureContainerCart.appendChild(imgFigureCart);

    const nameProductCart = document.createElement(`p`);
    nameProductCart.classList.add("my-0");
    nameProductCart.innerText = product.name;

    const cantidadProd = document.createElement("p");
    cantidadProd.classList.add("cantidad-product", "m-0");
    cantidadProd.innerText = product.cantidad;

    const priceProductCard = document.createElement(`p`);
    priceProductCard.classList.add("m-0", "fw-bold");

    orderContainer.append(shoppingCart);
  });

  myOrderContent.appendChild(orderContainer);

  montoTotal.innerText = carrito.reduce(
    (acc, product) => acc + product.price,
    0
  );

  contadorCarrito.textContent = carrito.length;

  // guardarStorage();
}

const pintarFooter = () => {
  footerCart.innerHTML = "";
  if (carrito.length === 0) {
    footerCart.innerHTML = `
    <p class="my-4" >Vacio, agrega productos a tu carrito.</p>`;
    return;
  }
};

function eliminarProducto(id) {
  const prodId = id;

  carrito = carrito.filter((product) => product.id !== prodId);
  productoEnCarrito();
}

// function guardarStorage() {
//   localStorage.setItem("carrito", JSON.stringify(carrito));
// }

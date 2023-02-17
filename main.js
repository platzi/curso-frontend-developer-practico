// *DESGLOSADOR DEL PEQUEO MENU DE DATOS DEL EMAIL
const navBarEmail = document.querySelector(".navbar-email");
const NavDesktopMenu = document.querySelector(".desktop-menu");

// * SECCTION MENU MOBILE
const navMobileMenuDetalles = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".mobile-hamburger");

// *ACTIVADOR Y DESACTIVADOR DE DETALLES DE PRODUCTION DEL CARRITO DE COMPRAS
const iconShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");

//*EXTRAYENDO EL CONTAINER DE LA LISTA DE PRODUCTO(shopping gateway and its structure )
const divCardsContainer = document.querySelector(".cards-container");

// *EXTRAYENDO LA ETIQUETA ASIDE QUE CONTIENE LA ETIQUETA PRODUCT-DETAIL-ESPECIFIC
const specificDetalleProduct = document.querySelector(
  ".product-detail-especific"
);

//*EXTRAYEDO LA ETIQUETA DE CERRADO DEL DETALLE DE PRODUCT SPECIFIC
const productDetalleClose = document.querySelector(".product-detail-close");

// ======================================================================

navBarEmail.addEventListener("click", toggleDesktopEmail);
function toggleDesktopEmail() {
  // toggle funciona como un interruptor
  // EN ESTE CASO AGREGA O ELIMINA LA CLASE INACTIVE
  NavDesktopMenu.classList.toggle("inactive");
}

mobileMenu.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  navMobileMenuDetalles.classList.toggle("inactive");
  // para cancelar el detalle del (del listado del carrito)
  shoppingCart.classList.add("inactive");
}

iconShoppingCart.addEventListener("click", toggleProductShopingCart);
function toggleProductShopingCart() {
  shoppingCart.classList.toggle("inactive");
  specificDetalleProduct.classList.add("inactive");
  // PARA QUE EL DESGLOSABLE DE LOS Detalles DEL MENU
  navMobileMenuDetalles.classList.add("inactive");
}
//*UN EVENTO PARA MOSTRAR LOS DETALLES DE LOS PRODUCTOS
function mostrarDetalleProduct() {
  specificDetalleProduct.classList.remove("inactive");
  shoppingCart.classList.add("inactive");
  navMobileMenuDetalles.classList.add("inactive");
}
//*EVENTO PARA CERRAR EL DETALLE DE PRODUCTO SPECIFI- despues de clickear la x de la imagen
productDetalleClose.addEventListener("click", productDetalleCloseAccion);
function productDetalleCloseAccion() {
  specificDetalleProduct.classList.add("inactive");
}

//ES COMO UNA LISTADO DEL BACKEND PARA RECIBIR DATO DESDE ESA UBICACION
const productsList = [];
productsList.push({
  name: "bike",
  price: 120.2,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "pantalla",
  price: 400.8,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "teclado",
  price: 300.32,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// NORMALMENTE SE CREA FUNCIONES PARA QUE PODAMOS UTILIZARLO CON DIFERENTES PARAMETROS
//*una function que podemos darle cualquier parametro
function renderProducts(arr) {
  for (const products of arr) {
    //creando la etiqueta  div contenedora
    const divProductCard = document.createElement("div");
    divProductCard.classList.add("product-card");

    //CREANDO LA ETIQUETA IMG Y SU ATRIBUTO SRC
    const productImg = document.createElement("img");
    productImg.setAttribute("src", products.imagen);

    //*agregando el escuchador de eventos para mostrar el detalle de los productos
    productImg.addEventListener("click", mostrarDetalleProduct);

    //CREANDO LA ETIQUETA DIV Y AÑADIENDO UNA CLASE LLAMADA PRODUCT- INF
    const divProductInfo = document.createElement("div");
    divProductInfo.classList.add("product-info");

    //ESTE DIV NO TIENE CLASE
    const divConteParraf = document.createElement("div");

    //ESTAMOS DANDO EL NOMBRE DEL PRECIO , ES LO QUE SE MOSTRARÁ EN PANTALLA
    const priceProduct = document.createElement("p");
    priceProduct.innerText = `$ ${products.price}`;
    //AGREGANDO AL NODO PADRE LOS NODOS HIOS  COMO LOS PARRAFOS
    divConteParraf.appendChild(priceProduct);

    //ESTAMOS DANDO EL NOMBRE DEL PRODUCTO  , TAMBIEN ES LO QUE SE MOSTRARÁ
    const nameProduct = document.createElement("p");
    nameProduct.innerText = `$ ${products.name}`;
    divConteParraf.appendChild(nameProduct);

    //CRANDO FIGURE , NO TIENE CLASE
    const figureProduct = document.createElement("figure");

    //CREANDO LA ETIQUETA IMG CON EL ATRIBUTO SRC PARA GUARDAR UNA IMAGEN QUE SIEMPRE SERÁ LA MISMA
    const iconProduct = document.createElement("img");
    iconProduct.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //CERRA LA ETIQUETA FIGURE POR QUE DENTRO DE ELLA CREAMOS LA ETIQUETA IMG
    figureProduct.appendChild(iconProduct);
    divProductInfo.appendChild(divConteParraf);

    divProductInfo.appendChild(figureProduct);
    divProductCard.appendChild(productImg);

    divProductCard.appendChild(divProductInfo);
    divCardsContainer.appendChild(divProductCard);
  }
}
renderProducts(productsList);

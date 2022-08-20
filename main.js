//MENU DESKTOP
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//MENU MOBILE
const menuHamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//SHOPPING CAR
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartDetails = document.querySelector(".shopping-cart-product");

//PRODUCT LIST
const cardsContainer = document.querySelector(".cards-container");

//PRODUCT DETAIL
const productDetail = document.querySelector(".product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

//CREATE AND INSERT INTO PRODUCT LIST
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Chair",
  price: 60,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Table",
  price: 260,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

//WORK
function toggleDesktopMenu() {
  //contains: Comprueba si la clase indicada existe en el atributo
  const isShoppingCartDetailsClosed =
    shoppingCartDetails.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  //antes de abrir el desktop menu hay que preguntar si el shopping car esta abierto, si lo esta hay que cerrarlo
  if (!isShoppingCartDetailsClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    shoppingCartDetails.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  //toggle: si la clase inactive está presente la elimina, de lo contrario la añade, toggle tambien funciona si se le coloca una condicion ej: desktopMenu.classList.toggle("inactive", i<10) va a añadir/eliminar visible, dependiendo de la condición
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  //contains: Comprueba si la clase indicada existe en el atributo
  const isShoppingCartDetailsClosed =
    shoppingCartDetails.classList.contains("inactive");

  //antes de abrir el mobile menu hay que preguntar si el mobile menu esta abierto, si lo esta hay que cerrarlo
  if (!isShoppingCartDetailsClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    shoppingCartDetails.classList.add("inactive");
  }

  //cerrando el product detail
  closeProductDetail();

  mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCart() {
  //contains: Comprueba si la clase indicada existe en el atributo
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  //antes de abrir el shopping car hay que preguntar si el mobile menu esta abierto, si lo esta hay que cerrarlo
  if (!isMobileMenuClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    mobileMenu.classList.add("inactive");
  }

  //antes de abrir el shopping car hay que preguntar si el desktop menu esta abierto, si lo esta hay que cerrarlo
  if (!isDesktopMenuClosed) {
    //add: Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
    desktopMenu.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }

  shoppingCartDetails.classList.toggle("inactive");
}
function openProductDetail() {
  //cerrando el shopping cart y el desktop menu cuando se abre el product details para que cuando se le de click al shopping cart o al desktop menu en vez de abrir se cierre porque permanecio abierto debajo del product detail
  shoppingCartDetails.classList.add("inactive");
  desktopMenu.classList.add("inactive");

  productDetail.classList.remove("inactive");
}
function closeProductDetail() {
  productDetail.classList.add("inactive");
}

function renderProducts(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfodiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const producthName = document.createElement("p");
    producthName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");

    const imgAddCar = document.createElement("img");
    imgAddCar.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //appendChild: sirve para agregar nodos o hijos (solo podemos agregar un nodo o elemento)
    productInfoFigure.appendChild(imgAddCar);

    //append:sirve para agregar nodos o hijos  (podemos agregar varios nodos y texto)
    productInfodiv.append(producthName, productPrice);

    productInfo.append(productInfodiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

//CALL TO ACTION
renderProducts(productList);

//EVENT
navEmail.addEventListener("click", toggleDesktopMenu);

menuHamburger.addEventListener("click", toggleMobileMenu);

menuShoppingCart.addEventListener("click", toggleShoppingCart);

productDetailCloseIcon.addEventListener("click", closeProductDetail);

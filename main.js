// Desktop Menu
const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", ToggleDesktopMenu);

function ToggleDesktopMenu() {
  const isCartClosed = !cartMenu.classList.contains("oculto-menu-cart");
  const isProductClosed = !productMenu.classList.contains("oculto-menu-cart");

  if (isCartClosed) {
    cartMenu.classList.add("oculto-menu-cart");
  }else if (isProductClosed) {
    productMenu.classList.add("oculto-menu-product");
  }

  desktopMenu.classList.toggle("oculto-menu-desktop");
}

// Burguer Menu

const burguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

burguerIcon.addEventListener("click", ToggleMobileMenu);

function ToggleMobileMenu() {
  const isCartClosed = !cartMenu.classList.contains("oculto-menu-cart");
  const isProductClosed = !productMenu.classList.contains("oculto-menu-cart");


  if (isCartClosed) {
    cartMenu.classList.add("oculto-menu-cart");
  }else if (isProductClosed) {
    productMenu.classList.add("oculto-menu-product");
  }


  mobileMenu.classList.toggle("oculto-menu-mobile");
}

// Cart Menu

const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector(".product-cart");

cartIcon.addEventListener("click", ToggleCartMenu);

function ToggleCartMenu() {
  const isMobileClosed = !mobileMenu.classList.contains("oculto-menu-mobile");
  const isDesktopClosed = !desktopMenu.classList.contains("oculto-menu-desktop");
  const isProductClosed = !productMenu.classList.contains("oculto-menu-cart");

  if (isMobileClosed) {
    mobileMenu.classList.add("oculto-menu-mobile");
  } else if (isDesktopClosed) {
    desktopMenu.classList.add("oculto-menu-desktop");
  }else if (isProductClosed) {
    productMenu.classList.add("oculto-menu-product");
  }


  cartMenu.classList.toggle("oculto-menu-cart");
}
//Product Menu

const productMenu = document.querySelector(".product-detail");
const closeProduct = document.querySelector('.product-detail-close');

closeProduct.addEventListener("click", CloseProductMenu);

function CloseProductMenu(){

productMenu.classList.add("oculto-menu-product");
}


function OpenProductMenu() {
  console.log("click");
  const isMobileClosed = !mobileMenu.classList.contains("oculto-menu-mobile");
  const isDesktopClosed = !desktopMenu.classList.contains("oculto-menu-desktop");
  const isCartClosed = !cartMenu.classList.contains("oculto-menu-cart");

  if (isMobileClosed) {
    mobileMenu.classList.add("oculto-menu-mobile");
  } else if (isDesktopClosed) {
    desktopMenu.classList.add("oculto-menu-desktop");
  } else if (isCartClosed) {
    cartMenu.classList.add("oculto-menu-cart");
  }
  
  

  productMenu.classList.remove("oculto-menu-product");
}


productList = [];

productList.push({
  name: "Bike",
  price: 12700,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bicycle helmet",
  price: 1200,
  image:
    "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Bicycle helmet",
  price: 1600,
  image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
});
productList.push({
  name: "Bicycle helmet",
  price: 1500,
  image:
    "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Seat",
  price: 300,
  image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
});
productList.push({
  name: "Tennis Montain Bike",
  price: 2200,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
});
productList.push({
  name: "Sunglasses",
  price: 800,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
});
productList.push({
  name: "Sunglasses",
  price: 600,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
});
productList.push({
  name: "Bicycle seat bag",
  price: 876,
  image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
});




function listarProductos(array) {
  const contenedorCartas = document.querySelector(".cards-container"); //Declaramos el contenedor principal del producto
  for (product of array) {
    const divProductos = document.createElement("div"); // Creamos el div principal del producto y le agregamos una Class
    divProductos.classList.add("product-card");

    const imgProducto = document.createElement('img'); // Creamos la imagen del producto y le agregamos su src
    imgProducto.setAttribute("src", product.image);
    imgProducto.addEventListener("click", OpenProductMenu);

  
    const divInfo = document.createElement("div"); // Creamos el div de la infromación del producto y le agregamos una Class
    divInfo.classList.add("product-info");

    const divDescripcion = document.createElement("div"); // Creamos el div del precio y el nombre del producto del producto

    const precioProducto = document.createElement("p"); // Creamos el parrafo del precio del producto
    precioProducto.innerText = "$" + product.price;
    const nombreProducto = document.createElement("p"); // Creamos el parrafo del nombre del producto
    nombreProducto.innerText = product.name;

    const figure = document.createElement("figure"); // Creamos la etiqueta figure del producto
    const imgCarrito = document.createElement("img"); // Creamos la imagen del producto y le agregamos su src
    imgCarrito.setAttribute("src", "./icons/bt_add_to_cart.svg");
    imgCarrito.setAttribute("alt", "");

    figure.appendChild(imgCarrito);
    divDescripcion.append(precioProducto, nombreProducto);
    divInfo.append(divDescripcion, figure);
    divProductos.append(imgProducto, divInfo);
    contenedorCartas.appendChild(divProductos);
  }
}

listarProductos(productList);

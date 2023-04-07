// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var productList = [];
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI) {
  return new Promise(function (resolve, reject) {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlAPI, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText));
        } else {
          const error = new Error("Error" + urlAPI);
          reject(error);
        }
      }
    };
    xhttp.send();
  });
}

fetchData(`${API}/products?offset=0&limit=10`)
  .then(function (response) {
    let productList = response;
    // Desktop Menu
    const email = document.querySelector(".navbar-email");
    const desktopMenu = document.querySelector(".desktop-menu");

    email.addEventListener("click", ToggleDesktopMenu);

    function ToggleDesktopMenu() {
      const isCartClosed = !cartMenu.classList.contains("oculto-menu-cart");
      const isProductClosed =
        !productMenu.classList.contains("oculto-menu-cart");

      if (isCartClosed) {
        cartMenu.classList.add("oculto-menu-cart");
      } else if (isProductClosed) {
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
      const isProductClosed =
        !productMenu.classList.contains("oculto-menu-cart");

      if (isCartClosed) {
        cartMenu.classList.add("oculto-menu-cart");
      } else if (isProductClosed) {
        productMenu.classList.add("oculto-menu-product");
      }

      mobileMenu.classList.toggle("oculto-menu-mobile");
    }

    // Cart Menu

    const cartIcon = document.querySelector(".navbar-shopping-cart");
    const cartMenu = document.querySelector(".product-cart");

    cartIcon.addEventListener("click", ToggleCartMenu);

    function ToggleCartMenu() {
      const isMobileClosed =
        !mobileMenu.classList.contains("oculto-menu-mobile");
      const isDesktopClosed = !desktopMenu.classList.contains(
        "oculto-menu-desktop"
      );
      const isProductClosed =
        !productMenu.classList.contains("oculto-menu-cart");

      if (isMobileClosed) {
        mobileMenu.classList.add("oculto-menu-mobile");
      } else if (isDesktopClosed) {
        desktopMenu.classList.add("oculto-menu-desktop");
      } else if (isProductClosed) {
        productMenu.classList.add("oculto-menu-product");
      }

      cartMenu.classList.toggle("oculto-menu-cart");
    }
    //Product Menu

    const productMenu = document.querySelector(".product-detail");
    const closeProduct = document.querySelector(".product-detail-close");

    closeProduct.addEventListener("click", CloseProductMenu);

    function CloseProductMenu() {
      productMenu.classList.add("oculto-menu-product");
    }

    function OpenProductMenu() {
      const isMobileClosed =
        !mobileMenu.classList.contains("oculto-menu-mobile");
      const isDesktopClosed = !desktopMenu.classList.contains(
        "oculto-menu-desktop"
      );
      const isCartClosed = !cartMenu.classList.contains("oculto-menu-cart");
      productList.forEach((product) => {
        if (product.images[0] == this.src) {
          productMenu.childNodes[3].src = product.images[0];
          productMenu.childNodes[5].childNodes[1].innerText = `$${product.price}`;
          productMenu.childNodes[5].childNodes[3].innerText = product.title;
          productMenu.childNodes[5].childNodes[5].innerText = product.description;
        }
      });
      if (isMobileClosed) {
        mobileMenu.classList.add("oculto-menu-mobile");
      } else if (isDesktopClosed) {
        desktopMenu.classList.add("oculto-menu-desktop");
      } else if (isCartClosed) {
        cartMenu.classList.add("oculto-menu-cart");
      }

      productMenu.classList.remove("oculto-menu-product");
    }

    function listarProductos(array) {
      const contenedorCartas = document.querySelector(".cards-container"); //Declaramos el contenedor principal del producto
      for (product of array) {
        const divProductos = document.createElement("div"); // Creamos el div principal del producto y le agregamos una Class
        divProductos.classList.add("product-card");

        const imgProducto = document.createElement("img"); // Creamos la imagen del producto y le agregamos su src
        imgProducto.setAttribute("src", product.images[0]);
        imgProducto.addEventListener("click", OpenProductMenu);

        const divInfo = document.createElement("div"); // Creamos el div de la infromación del producto y le agregamos una Class
        divInfo.classList.add("product-info");

        const divDescripcion = document.createElement("div"); // Creamos el div del precio y el nombre del producto del producto

        const precioProducto = document.createElement("p"); // Creamos el parrafo del precio del producto
        precioProducto.innerText = "$" + product.price;
        const nombreProducto = document.createElement("p"); // Creamos el parrafo del nombre del producto
        nombreProducto.innerText = product.title;

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
  })
  .catch((error) => {
    console.log(error);
  });


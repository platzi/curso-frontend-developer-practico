const menuEmail = document.querySelector(".navbar-email"); //que seleecione el elemento del correo de la barra de menu
const desktopMenu = document.querySelector(".desktop-menu"); //seleccione el elemento que tenga a clase destop-manu
const menuHambuerguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoDeCompras = document.querySelector(".navbar-shopping-cart");
const listaDeProductos = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu); // cuando le den clic en el email llame la funcion
menuHambuerguer.addEventListener("click", toggleMobileMenu);
carritoDeCompras.addEventListener("click", toggleCarrritoCompras);

function toggleDesktopMenu() {
  const isCarritoClosed = listaDeProductos.classList.contains("inactive");

  if (!isCarritoClosed) {
    listaDeProductos.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive"); //quita o pone la clase inactive
}
function toggleMobileMenu() {
  const isCarritoClosed = listaDeProductos.classList.contains("inactive");

  if (!isCarritoClosed) {
    listaDeProductos.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarrritoCompras() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  listaDeProductos.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  precio: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Compu",
  precio: 820,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function productRender(arr){
    for (product of arr) {
        const productCard = document.createElement("div"); // estoy creando un elemento de tipo div
        productCard.classList.add("product-card"); //estoy  adicionando la classe xxxxxx al componente creado div
      
        const productImage = document.createElement("img"); // se crea el elemento de tipo imagen
        productImage.setAttribute("src", product.image); //al elemt se le pone la url de la imagen que esta en el producto segun el array
      
        const productInfo = document.createElement("div"); // estoy creando un elemento de tipo div
        productInfo.classList.add("product-info");
      
        const productInfoDiv = document.createElement("div"); // estoy creando un elemento de tipo div
      
        const precioProduct = document.createElement("p");
        precioProduct.innerHTML = "$" + product.precio;
      
        const productName = document.createElement("p");
        productName.innerHTML = product.name;
      
        productInfoDiv.appendChild(precioProduct), // dentro el contenedor se meten los elementos parrafos
          productInfoDiv.appendChild(productName);
      
        const productFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
      
        productFigure.appendChild(productImgCart); // se agrega el conmponente imagen  al contenedor figure
        productInfo.appendChild(productInfoDiv); // se ingresan los contenedores mas internos dentro el mas externo
        productInfo.appendChild(productFigure);
      
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
}

productRender(productList);

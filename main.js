/**
 * La Siguiente funcion los que hace es tomar el div que contiene
 * el menu de usuario y al hacer clic sobre el email que esta
 * en el navbar el menua de usuario aparecera abajo
 * originalmente el menu tiene una clase "inactive" que
 * no lo muestra, cuando se hace clic en el email se llama
 * a la funcion toggleDesktopMenu, que lo que hace es agregar
 * o quitar la clase inactive del div contenedor del menu
 * para mostrar o no el menu
 */
const desktopMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".navbar-email");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  if (!shoppingCartContainer.classList.contains("inactive")) {
    toggleCarritoAside();
  }

  if(!productDetailContainer.classList.contains("inactive")){  
    closeProductDetailAside();
  }

  desktopMenu.classList.toggle("inactive");
}

/*El siguiente codigo es marecido al terior, pero lo que
se busca es ocultar y mostrar el menu en mobile
cuando se de clic en el icono que es un menu
en forma de hamburguesa*/
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  if (!shoppingCartContainer.classList.contains("inactive")) {
    toggleCarritoAside();
  }

  if(!productDetailContainer.classList.contains("inactive")){  
    closeProductDetailAside();
  }

  mobileMenu.classList.toggle("inactive");
}

/* Clase13.html agregando el shoppingCartContainer de carrito de compras, verificando
que el menu de usuario este cerrado, en caso contrartio cerrarlo
y viceversa
*/
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside() {
  if (!mobileMenu.classList.contains("inactive")) {
    toggleMobileMenu();
  }
  if (!desktopMenu.classList.contains("inactive")) {
    toggleDesktopMenu();
  }
  if(!productDetailContainer.classList.contains("inactive")){  
    closeProductDetailAside();
  }
  shoppingCartContainer.classList.toggle("inactive");
}

/**Lo siguiente es lo que se espera de una API REST, una lista de prodcutos 
*/
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "TV",
  price: 500,
  image:
    "https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Android",
  price: 450,
  image:
    "https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "iPhone",
  price: 1000,
  image:
    "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "KTM Super Duke",
  price: 45000,
  image:
    "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Candelabro",
  price: 1450,
  image:
    "https://images.pexels.com/photos/14590600/pexels-photo-14590600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
/*
<div class="product-card">
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
      </div>
    </div>
**/

/**
 * Una vez con la lista de elementos y con el HTML al que queremos llegar lo que se procede es ir 
 * acomodando lo que nos interesa del array en HTML para que se ponga en el documento
 * La idea es crear un elemento, agregarle una clase y si es necesario agregarle mas elementos hijos
 * estos elementos seles agrega partes del array que es interpretada por el navegador en
 * como rutas para imagen o como texto
 */

const cardsContainer = document.querySelector(".cards-container");

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  //Product={name,price,image} -> product.image
  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
  const productName = document.createElement("p");
  productName.innerText = product.name;

  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

  /*Para cada imagen de de los productos
  se agrega un evenlistener, pero en la llamada
  de la funcion no se pueden pasar argumentos entonces
  usare una funcion anonima que reciba, las caracteristicas
  del producto al que se le dio click para posteriormente
  crear el componente con JS y pasarselo al HTML*/
  productImg.addEventListener('click',function(){
    createProductDetail(productImg,productPrice,productName);
    openProductDetailAside();
  });

}

/** Seleccionar el contenedor de las images*/
const productDetailContainer = document.querySelector('#productDetail');
//El icono de cerrar de la imagen
const productDetailCloseIcon = document.querySelector('.product-detail-close');

//Agregar el addEventListener
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function createProductDetail(productImg,productPrice,productName){
  //HAcer consulta de selector de un elemento, sobre escribir en vez de crear uno nuevo
  console.log(productName,productImg);

  //Creacion de la imagen
  // const productImg = document.createElement("img");
  // productImg.setAttribute("src", product.image);

  //Sustituir la img de la clase productDetail
  const imgTmp=productDetailContainer.querySelector(".product-detail-img");
  imgTmp.setAttribute("src",productImg.getAttribute("src"));
  imgTmp.setAttribute("alt", productName.innerText);
  console.log(imgTmp);

  //Traer las etiquetas contenedoras de productDetailContainer
  const price=productDetailContainer.querySelector("#product-detail-price");
  const name=productDetailContainer.querySelector("#product-detail-name");
  const description=productDetailContainer.querySelector("#product-detail-description");

  //Cambiar el contenido de las etiquetas P. por el contenido del producto seleccionado
  price.innerText=productPrice.innerText; 
  name.innerText=productName.innerText; 
  description.innerText="Este texto deberia conseguirse desde un objeto DAO que a su vez viene desde la api"; 

  
  //Creacion del div que contiene la informacion de producto
  // const productInfo = document.createElement("div");
  // productInfo.classList.add("product-info");
  // //Agregar la informacion contenedora
  // const productPrice = document.createElement("p");
  // productPrice.innerText = "$" + product.price;
  // const productName = document.createElement("p");
  // productName.innerText = product.name;
  // const productDescription = document.createElement("p");;
  // productDescription.innerText="Una descripcion que deberia venir desde la api"//en esta se obtendria la info de product, que viene de la api

  //Creacion del boton agregar al carrito
  // const buttonAdd = document.createElement("button");
  // buttonAdd.classList.add("primary-button");
  // buttonAdd.classList.add("add-to-cart-button");
  // //Creacion del icono del carrito
  // const productImgCart = document.createElement("img");
  // productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  // productImgCart.setAttribute("alt", "add to cart");

  //Adjuntar los elementos
  // buttonAdd.appendChild(productImgCart);
  // buttonAdd.append("Add to cart");
  // productInfo.append(productPrice,productName,productDescription,buttonAdd);
  // productDetailContainer.append(productImg,productInfo);
}

//Funcion cada vez que se abre una imagen
function openProductDetailAside(){
  
  if (!mobileMenu.classList.contains("inactive")) {
    toggleMobileMenu();
  }
  if (!desktopMenu.classList.contains("inactive")) {
    toggleDesktopMenu();
  }
  if (!shoppingCartContainer.classList.contains("inactive")) {
    toggleCarritoAside();
  }
  productDetailContainer.classList.remove('inactive');
}

//cerrar la imagen
function closeProductDetailAside(){  
  productDetailContainer.classList.add('inactive');
}
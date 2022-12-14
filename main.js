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
  if (!aside.classList.contains("inactive")) {
    toggleCarritoAside();
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
  if (!aside.classList.contains("inactive")) {
    toggleCarritoAside();
  }

  mobileMenu.classList.toggle("inactive");
}

/* Clase13.html agregando el aside de carrito de compras, verificando
que el menu de usuario este cerrado, en caso contrartio cerrarlo
y viceversa
*/
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside() {
  if (!mobileMenu.classList.contains("inactive")) {
    toggleMobileMenu();
  }
  if (!desktopMenu.classList.contains("inactive")) {
    toggleDesktopMenu();
  }

  aside.classList.toggle("inactive");
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
  name: "Candelabro",
  price: 1450,
  image:
    "https://images.pexels.com/photos/14590600/pexels-photo-14590600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "KTM Super Duke",
  price: 45000,
  image:
    "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
}

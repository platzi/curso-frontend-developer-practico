const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguesaMenu = document.querySelector(".menu");
const MobilMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", aparecerMenu);
hamburguesaMenu.addEventListener("click", aparecerMenuHamburguesa);
carritoIcon.addEventListener("click", aparecerCarritoDeCompras);

function aparecerMenu () {
    if (!asideCarrito.classList.contains("inactive")) {
        asideCarrito.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

function aparecerMenuHamburguesa () {
    if (!asideCarrito.classList.contains("inactive")) {
        asideCarrito.classList.add("inactive")
    }
    MobilMenu.classList.toggle("inactive");
}

function aparecerCarritoDeCompras(){
    if (!MobilMenu.classList.contains("inactive")) {
        MobilMenu.classList.add("inactive")
    } 
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive")
    }
    asideCarrito.classList.toggle("inactive");
}

const productList = [];

productList.push({
    Nombre: "bike",
    Price: 120,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    Nombre: "electric scooter",
    Price: 1250,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    Nombre: "scooter",
    Price: 6480,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.forEach((product) => {
      imprimirProductos = `<div class="product-card">
          <img src = ${product.Image} alt="">
          <div class="product-info">
          <div>
            <p>${product.Price}</p>
            <p>${product.Nombre}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`
    cardsContainer.innerHTML += imprimirProductos;
    })
/*
function showProducts (array) {
    for (product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const img = document.createElement("img");
        img.setAttribute("src",product.Image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const newDiv = document.createElement("div");

        const textoPrice = document.createElement("p");
        textoPrice.innerText = "$" + product.Price;

        const textoNombre = document.createElement("p");
        textoNombre.innerText = product.Nombre;
        
        const figure = document.createElement("figure");

        const figureCarrito = document.createElement("img");
        figureCarrito.setAttribute("src", "./icons/bt_add_to_cart.svg");

        figure.appendChild(figureCarrito);

        newDiv.appendChild(textoPrice);
        newDiv.appendChild(textoNombre);

        productInfo.appendChild(newDiv);
        productInfo.appendChild(figure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

showProducts (productList);
*/

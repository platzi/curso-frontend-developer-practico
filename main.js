let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamburgerIcon = document.querySelector(".menu");
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let mobileMenu = document.querySelector(".mobile-menu");
let shoppingCartContainer = document.querySelector("#shoppingCartContainer");

let cardsContainer = document.querySelector(".cards-container"); // Creamos esta variable para hacer .appendChild del productCart

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    let isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    let isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    let isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    let isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}


let productList = [];  // Array para devolver el codigo JS cuando se usa API. Por ahora es manual.

// Dentro del array agregams ojetos(elementos).
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Compu",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// Creamos una funcion.
function renderProducts(array) {
    for (product of array) {
        // CREAR LA MAQUETACION DEL HTML
        let productCart = document.createElement("div"); // Crea el contenedor div
        productCart.classList.add("product-card"); // Le añade la clase product-card al productCard (div) 
    
        // Product = {name, price, image} -> product.image
        let productImg = document.createElement("img"); // Crea el elemento imagen
        productImg.setAttribute("src", product.image); //Se le agrega el atributo a la imagen con la lista de productos del array que se hizo arriba
    
        let productInfo = document.createElement("div"); // Crea el contenedor div
        productInfo.classList.add("product-info"); // Le anade la clase product-info (div)
    
        let productInfoDiv = document.createElement("div"); // Crea el contenedor div
    
        let productPrice = document.createElement("p"); // Crea el parrafo <p>
        productPrice.innerText = "$" + product.price; // Le anade el precio al parrafo productPrice con la lista de productos del array que se hizo arriba.

        let productName = document.createElement("P"); // Crea el parrafo <p>
        productName.innerText = product.name; // Le anade el nombre al parrafo productPrice con la lista de productos del array que se hizo arriba.
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        let productInfoFigure = document.createElement("figure"); // Crea el figure <figure>
    
        let productImgCart = document.createElement("img"); // Crea el elemto imagen <img>
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg"); // Le anade el atributo de la imagen a productImgCart

        //APPENDCHILD LA MAQUETACION AL HTML DE ABAJO HACIA ARRIBA. todos las variables con .appenChild tendran dentro de esa etiqueta a la variable que este entre parentesis.
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardsContainer.appendChild(productCart);
    }
}

renderProducts(productList); // Tema de escalabilidad. La funcion se pude llamar en x momento (ejemplo: Cuando le damos click a un boton).



// for (product of productList) {
//     let productCart = document.createElement("div");
//     productCart.classList.add("product-card");

//     // Product = {name, price, image} -> product.image
//     let productImg = document.createElement("img");
//     productImg.setAttribute("src", product.image);

//     let productInfo = document.createElement("div");
//     productInfo.classList.add("product-info");

//     let productInfoDiv = document.createElement("div");

//     let productPrice = document.createElement("p");
//     productPrice.innerText = "$" + product.price;
//     let productName = document.createElement("P");
//     productName.innerText = product.name;

//     productInfoDiv.appendChild(productPrice);
//     productInfoDiv.appendChild(productName);

//     let productInfoFigure = document.createElement("figure");

//     let productImgCart = document.createElement("img");
//     productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

//     productInfoFigure.appendChild(productImgCart);

//     productInfo.appendChild(productInfoDiv);
//     productInfo.appendChild(productInfoFigure);

//     productCart.appendChild(productImg);
//     productCart.appendChild(productInfo);

//     cardsContainer.appendChild(productCart);
// }
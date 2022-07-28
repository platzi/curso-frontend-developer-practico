/*Variables*/
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguerMenu = document.querySelector(".menu-hamburguer");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuCarritoDetalles = document.querySelector(".product-detail");
const mobileMenu = document.querySelector(".mobile-menu");

/*Variables con contenedor HTML */
const cardContainer = document.querySelector(".cards-container");

/*Productos ingresados en el Array*/
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*Eventos */
menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleMenuCarrito);

/*Funciones */
function toggleDesktopMenu() {
    /*Se crea una variable local en la función para preguntar si el menú del carrito de compras contiene la clase "Inactive" */
    const isCarritoClosed = menuCarritoDetalles.classList.contains("inactive");
    /*Una condicional que evalúa si el menú del carrito esto abierto se le agrega la clase "Inactive" */
    if (!isCarritoClosed) {
        menuCarritoDetalles.classList.add("inactive");
    }
    /*Al presionar en el menu DesktopMenu se cambia por cada click su clase "Inactive" */
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isCarritoClosed = menuCarritoDetalles.classList.contains("inactive");

    if (!isCarritoClosed) {
        menuCarritoDetalles.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleMenuCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    menuCarritoDetalles.classList.toggle("inactive");
}
/*Función que ejecuta la renderización de productos de nuestro catalogo */
function renderProducts (arr) {
    for (product of productList) {
        /*Creando contenedor y agregando su clase */
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        /*Creando contenedor y agregando su clase */
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
    
        /*Creando contenedor y agregando su clase */
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        /*Insertando los contenedores dentro de otros como hijos */
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        /*Creando contenedor y agregando su clase */
        const productInfoDiv = document.createElement("div");
        productInfo.appendChild(productInfoDiv);
    
        /*Creando contenedor y agregando su clase o datos */
        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;
        const productName = document.createElement("p");
        productName.innerText = "$ " + product.name;
    
        /*Insertando los contenedores dentro de otros como hijos */
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        /*Creando contenedor y agregando su clase o datos */
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "/icons/bt_add_to_cart.svg");
    
        /*Insertando los contenedores dentro de otros como hijos */
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(productImgCard);
    
        /*CARDS-CONTAINER */
        cardContainer.appendChild(productCard);
    }
}
/*Invocando a la función para el catalogo de productos */
renderProducts(productList);


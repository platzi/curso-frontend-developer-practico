/*Variables*/
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguerMenu = document.querySelector(".menu-hamburguer");
const iconChange = document.querySelector(".icon-x");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuCarritoDetalles = document.querySelector(".shopping-cart-detail");
const mobileMenu = document.querySelector(".mobile-menu");

/*Variables con contenedor HTML */
const cardContainer = document.querySelector(".cards-container");
const detallesDeProducto = document.querySelector(".product-detail");

/*Productos ingresados en el Array*/
const productList = [];
productList.push({
    name: "Bicicleta",
    price: 120,
    image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Es una bicicleta 1",
});
productList.push({
    name: "Bike",
    price: 120,
    image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Es una bicicleta 2",
});
productList.push({
    name: "Bike",
    price: 120,
    image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Es una bicicleta 3",
});
productList.push({
    name: "Bike",
    price: 120,
    image:
        "https://ecoinventos.com/wp-content/uploads/2021/01/CityQ.jpg",
    description: "Es una bicicleta 4",
});
/*Asignando Eventos */
menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleMenuCarrito);
iconChange.addEventListener("click", toggleMobileMenu);

/*Evento que ayudara a reajustar los iconos cada ves que sobre pase los 640 pixeles de dimensión */
addEventListener("resize", () => {
    if (innerWidth > 640) {
        hamburguerMenu.style.display = "none";
        iconChange.style.display = "none";
        mobileMenu.classList.add("inactive");
    } else {
        hamburguerMenu.style.display = "block";
    }
});

/*Funciones */
/*Función que muestra el menú para cerrar sección o mostrar nuestra información */
function toggleDesktopMenu() {
    /*Variables que verifican clases de las etiquetas de HTML */
    const isDetailsProductOpen = detallesDeProducto.classList.contains("inactive");

    /*Condicionales para controlar la funcionalidad entre todos los componentes al abrirse y cerrarse */
    /*Se crea una variable local en la función para preguntar si el menú del carrito de compras contiene la clase "Inactive" */
    const isCarritoClosed = menuCarritoDetalles.classList.contains("inactive");
    /*Una condicional que evalúa si el menú del carrito esto abierto se le agrega la clase "Inactive" */
    if (!isCarritoClosed) {
        menuCarritoDetalles.classList.add("inactive");
    }

    if (!isDetailsProductOpen) {
        detallesDeProducto.classList.add("inactive")
    }

    /*Al presionar en el menu DesktopMenu se cambia por cada click su clase "Inactive" */
    desktopMenu.classList.toggle("inactive");
}
/*Función que muestra el menú del navbar al hacer click en el menú hamburguesa */
function toggleMobileMenu() {
    /*Variables que verifican clases de las etiquetas de HTML */
    const isCarritoClosed = menuCarritoDetalles.classList.contains("inactive");
    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");
    const isDetailsProductOpen = detallesDeProducto.classList.contains("inactive");

    /*Condicionales para controlar la funcionalidad entre todos los componentes al abrirse y cerrarse */
    if (!isCarritoClosed) {
        menuCarritoDetalles.classList.add("inactive");
    }else if (!isDetailsProductOpen) {
        detallesDeProducto.classList.add("inactive");
    }

    if (isMobileMenuOpen) {
        hamburguerMenu.style.display = "none";
        iconChange.style.display = "block";
    } else {
        hamburguerMenu.style.display = "block";
        iconChange.style.display = "none";
    }

    /*Por cada click que se genere se cambiara a clase "Inactive" o se le removera esa clase */
    mobileMenu.classList.toggle("inactive");
}
/*Función que muestra el menú del carrito de compras */
function toggleMenuCarrito() {
    /*Variables que verifican clases de las etiquetas de HTML */
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const menuCarritoOpen = menuCarritoDetalles.classList.contains("inactive");
    const isDetailsProductOpen = detallesDeProducto.classList.contains("inactive");
    /*Condicionales para controlar la funcionalidad entre todos los componentes al abrirse y cerrarse */
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }else if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }else if (!isDetailsProductOpen) {
        detallesDeProducto.classList.add("inactive");
    }
    /*
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    */
    if (menuCarritoOpen && innerWidth < 640) {
        iconChange.style.display = "none";
        hamburguerMenu.style.display = "block";
    }

    menuCarritoDetalles.classList.toggle("inactive");
}
/*Función que ejecuta la renderización de productos de nuestro catalogo */

const showProductsOnScreen = (lista) => {
    lista.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.addEventListener("click", () => {
            openProductDetailContainer(product);
        });

        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
        /*Creando contenedor y agregando su clase */
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-detail-info");

        /*Insertando los contenedores dentro de otros como hijos */
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        /*Creando contenedor y agregando su clase */
        const productInfoDiv = document.createElement("div");
        productInfo.appendChild(productInfoDiv);

        /*Creando contenedor y agregando su clase o datos */
        const productPrice = document.createElement("p");
        productPrice.innerText = product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

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
        const mainContainer = document.querySelector(".main-container");
        mainContainer.append(cardContainer);
    });
};
showProductsOnScreen(productList);

/*Función que renderiza y obtiene los datos para mostrarlos como detalles del producto */
const openProductDetailContainer = (product) => {
        /*Variables que verifican clases de las etiquetas de HTML */
        const isMenuCarOpen = menuCarritoDetalles.classList.contains("inactive");
        const isDesktopMenuOpen = desktopMenu.classList.contains("inactive");
        const isMenuMobileOpen = mobileMenu.classList.contains("inactive");
        /*Condicionales para controlar la funcionalidad entre todos los componentes al abrirse y cerrarse */
        if (!isDesktopMenuOpen) {
            desktopMenu.classList.toggle("inactive");
        } else if (!isMenuCarOpen) {
            menuCarritoDetalles.classList.toggle("inactive");
        } else if (!isMenuMobileOpen) {
            mobileMenu.classList.toggle("inactive");
        }

        detallesDeProducto.innerHTML= " ";
        const productDetailClosed = document.createElement("div");
        productDetailClosed.classList.add("product-detail-close");
        productDetailClosed.addEventListener("click", closeDetailsProduct);
        const productDetailCloseIcon = document.createElement("img");
        productDetailCloseIcon.classList.add("product-detail-close__icon");
        productDetailCloseIcon.setAttribute("src", "./icons/icon_close.png");
        productDetailClosed.append(productDetailCloseIcon);
    
        const productDetailImg = document.createElement("img");
        productDetailImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = "$ " + product.name;
    
        const productDescription = document.createElement("p");
        productDescription.innerText = product.description;
    
        const addCartButton = document.createElement("button");
        addCartButton.classList.add("primary-button", "add-to-cart-button");
        addCartButton.innerText = "Add to cart";
        const addCartIcon = document.createElement("img");
        addCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
        addCartButton.appendChild(addCartIcon);
    
        productInfo.append(
            productPrice,
            productName,
            productDescription,
            addCartButton
        );

    detallesDeProducto.append(productDetailClosed, productDetailImg, productInfo);
    detallesDeProducto.classList.remove("inactive");
};

/*Función para cerrar el contenedor de los detalles del producto */
function closeDetailsProduct() {
    /*Limpia el contenedor de los detalles de los productos cada ves que se ejecuta el cierre de este */
    
    /*Agrega la clase "Inactive al contenedor detallesDelProducto" */
    detallesDeProducto.classList.add("inactive");
}

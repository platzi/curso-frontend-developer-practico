let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamburguesa = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu")
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let shoppingCartContainer = document.querySelector("#shoppingCartContainer");
let cardsContainer = document.querySelector(".cards-container")
let productDetail = document.querySelector("#productDetail");
let iconProductDetailClose = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleBurguerMenu);
menuCarritoIcon.addEventListener("click", toggleProductDetail);
iconProductDetailClose.addEventListener("click", productDetailClose)


function toggleBurguerMenu() {
    let isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactivo");
    let isProductDetailClose = productDetail.classList.contains("inactivo");

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactivo")
    } 

    if (!isProductDetailClose) {
        productDetailClose()
    }

    mobileMenu.classList.toggle("inactivo");
    console.log("hola")
}

function toggleDesktopMenu() {
    let isShoppingCartContainer = shoppingCartContainer.classList.contains("inactivo");
    let isProductDetailClosed = productDetail.classList.contains("inactive");
    
    if (!isShoppingCartContainer) {
        shoppingCartContainer.classList.add("inactivo")
    } 

    if (!isProductDetailClosed) {
        productDetail.classList.add("inactivo")
    }

    desktopMenu.classList.toggle("inactivo");
    console.log("hola")
}

function toggleProductDetail() {
    let isMobileMenuClosed = mobileMenu.classList.contains("inactivo");
    let isDesktopMenuClosed = desktopMenu.classList.contains("inactivo");
    let isProductDetailClose = productDetail.classList.contains("inactivo");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactivo")
    } 

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactivo")
    } 

    if (!isProductDetailClose) {
        productDetailClose()
    }

    shoppingCartContainer.classList.toggle("inactivo");
    console.log("hola")
}


function productDetailOpen() {
    let isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactivo");
    let isMobileMenuClosed = mobileMenu.classList.contains("inactivo");
    let isDesktopMenuClosed = desktopMenu.classList.contains("inactivo");

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactivo")
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactivo")
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactivo")
    }

    productDetail.classList.remove("inactivo")
}

function productDetailClose() {
    productDetail.classList.add("inactivo")
}

/* Crear Productos a travez de un array */
const arrayProducts = [];
arrayProducts.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
arrayProducts.push({
    name: "Tv",
    price: 570,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
arrayProducts.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
arrayProducts.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
arrayProducts.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
arrayProducts.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
arrayProducts.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
arrayProducts.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function crerarProductos(arr) {
    for (products of arr) {
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        let imagenProducto = document.createElement("img");
        imagenProducto.setAttribute("src", products.image);
        imagenProducto.addEventListener("click", productDetailOpen)
    
        let productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
    
        let divSolito = document.createElement("div");
    
        let productPrice = document.createElement("p");
        productPrice.innerHTML = "€" + products.price;
    
        let productName = document.createElement("p");
        productName.innerHTML = products.name;
    
        let figure = document.createElement("figure");
    
        let carritoIcon = document.createElement("img");
        carritoIcon.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        cardsContainer.appendChild(productCard);
        productCard.appendChild(imagenProducto);
        productCard.appendChild(productInfo);
        productInfo.appendChild(divSolito);
        divSolito.appendChild(productName);
        divSolito.appendChild(productPrice);
        productInfo.appendChild(figure);
        figure.appendChild(carritoIcon);
    }
}

crerarProductos(arrayProducts);


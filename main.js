let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamburguesa = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu")
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let shoppingCartContainer = document.querySelector("#shoppingCartContainer");
let cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleBurguerMenu);
menuCarritoIcon.addEventListener("click", toggleProductDetail)


function toggleBurguerMenu() {
    let isproductDetailClosed = shoppingCartContainer.classList.contains("inactivo");

    if (!isproductDetailClosed) {
        shoppingCartContainer.classList.add("inactivo")
    } 

    mobileMenu.classList.toggle("inactivo");
    console.log("hola")
}

function toggleDesktopMenu() {
    let isproductDetailClosed = shoppingCartContainer.classList.contains("inactivo");

    if (!isproductDetailClosed) {
        shoppingCartContainer.classList.add("inactivo")
    } 

    desktopMenu.classList.toggle("inactivo");
    console.log("hola")
}

function toggleProductDetail() {
    let isMobileMenuClosed = mobileMenu.classList.contains("inactivo");

    let isDesktopMenuClosed = desktopMenu.classList.contains("inactivo");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactivo")
    } 

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactivo")
    } 

    shoppingCartContainer.classList.toggle("inactivo");
    console.log("hola")
}

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


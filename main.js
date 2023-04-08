const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerIcon.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleshoppingCartContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleshoppingCartContainer() {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Motorcycle",
    price: 1400,
    image: "./images/bike-g0f75bc46d_1280.jpg"
});

productList.push({
    name: "MacBook",
    price: 800,
    image: "./images/macbook-g6d3523b9f_1280.jpg"
});

productList.push({
    name: "Xbox",
    price: 1000,
    image: "./images/video-game-console-g7eaa97af7_1280.jpg"
});

productList.push({
    name: "Motorcycle helmet",
    price: 80,
    image: "./images/motorbike-g884dc8432_1280.jpg"
});

function renderProducts(array) {
    for(product of array) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
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
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
const menuEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const orders = document.querySelector(".orders");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");
const closePanel = document.querySelectorAll(".detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarOrders);

function toggleDesktopMenu () {
    const isOrdersClose = orders.classList.contains("inactive");
    const isProductDetailClose = productDetail.classList.contains("inactive");
    if(!isOrdersClose || !isProductDetailClose) {
        orders.classList.add("inactive");
        productDetail.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isOrdersClose = orders.classList.contains("inactive");
    
    if(!isOrdersClose) {
        orders.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarOrders () {
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    const isProductDetailClose = productDetail.classList.contains("inactive");
    if (!isMobileMenuClose || !isProductDetailClose) {
        mobileMenu.classList.add("inactive");
        productDetail.classList.add("inactive");
    }

    orders.classList.toggle("inactive");
}
const productList = [];

function renderProducts(arr) {
    for (var i = 1; i <=20; i++) {
        arr.push({
            name: 'Bike',
            price: 120,
            image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        });
    }
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv= document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productImgCard.setAttribute("class", "add-product");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

const imgProducts = document.querySelectorAll(".add-product");

for (img of imgProducts) {
    img.addEventListener("click", showProductDetails);
}

function showProductDetails() {
    const isOrdersClose = orders.classList.contains("inactive");
    const isdesktopMenuClose = desktopMenu.classList.contains("inactive");
    if (!isOrdersClose || !isdesktopMenuClose) {
        orders.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }
    productDetail.classList.remove("inactive");
}

for (img of closePanel) {
    img.addEventListener("click", closeProductDetails);
}

function closeProductDetails () {
    productDetail.classList.add("inactive");
}
